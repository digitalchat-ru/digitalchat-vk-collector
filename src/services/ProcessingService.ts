import axios from "axios";
import debugAxiosResponse from "../utils/debugAxiosResponse";
import BaseService from "./BaseService";
import ProcessingCacheService from "./ProcessingCacheService";
import VkService from "./VkService";

import type { NewVkMessage } from "../entities/NewVkMessage";
import type { WebhookData } from "../entities/WebhookData";
import type { BaseServiceProps } from "./BaseService";
import type RedisService from "./RedisService";
import { WebhookTypeEnum } from "../enums/WebhookTypeEnum";
import { VkServiceEventTypeEnum } from "../enums/VkServiceEventTypeEnum";

export interface ProcessingServiceProps extends BaseServiceProps {
  webhookUrl?: string;
  webhookApiToken: string;
  vkService: VkService;
  redisService: RedisService;
  processingCacheService: ProcessingCacheService;
}

class ProcessingService extends BaseService {
  webhookUrl?: string;
  webhookApiToken: string;
  vkService: VkService;
  redisService: RedisService;
  processingCacheService: ProcessingCacheService;

  constructor(props: ProcessingServiceProps) {
    super(props);
    this.webhookUrl = props.webhookUrl;
    this.webhookApiToken = props.webhookApiToken;
    this.redisService = props.redisService;
    this.vkService = props.vkService;
    this.processingCacheService = props.processingCacheService;

    this.vkService.emitter.on(VkServiceEventTypeEnum.NEW_MESSAGE, (message) => {
      this.processNewMessage(message);
    });

    this.vkService.on(
      VkServiceEventTypeEnum.ACCOUNT_PROFILE_INFO,
      (profile) => {
        this.sendWebhook({
          type: WebhookTypeEnum.PROFILE_LOADED,
          payload: profile,
        });
      }
    );
  }

  async processNewMessage(message: NewVkMessage): Promise<void> {
    this.logger.debug(`New message ${JSON.stringify(message)}`);

    if (!message.chatId) {
      return;
    }

    const userPromise = await this.processingCacheService
      .getUserFromCache(message.senderId)
      .then(async (x) => {
        if (x === null) {
          const res = await this.vkService.gerUserById(message.senderId);
          this.processingCacheService.setUserCache(res);
          return res;
        }
        return x;
      });

    const chatPromise = this.processingCacheService
      .getChatFromCache(message.chatId)
      .then(async (x) => {
        if (x === null) {
          const res = await this.vkService.getConversationChatSettingsByPeerId(
            message.peerId,
            message.chatId
          );
          this.processingCacheService.setChatCache(res);
          return res;
        }
        return x;
      });

    const [user, chat] = await Promise.all([userPromise, chatPromise]);
    const webhookSent = await this.sendWebhook({
      type: WebhookTypeEnum.NEW_MESSAGE,
      payload: {
        message,
        sender: user,
        chat,
      },
    });
    if (webhookSent) {
    }
  }

  async sendWebhook(webhook: WebhookData) {
    let webhookSent: boolean;
    try {
      this.logger.debug("Send webhook");
      this.logger.debug(webhook);
      if (this.webhookUrl) {
        await axios.post(this.webhookUrl, webhook, {
          headers: { Authorization: `Bearer ${this.webhookApiToken}` },
        });
      }
      webhookSent = true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        debugAxiosResponse(this.logger, err.response);
      }
      webhookSent = false;
    }

    return webhookSent;
  }
}

export default ProcessingService;
