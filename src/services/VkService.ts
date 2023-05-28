import { Updates, VK } from "vk-io";
import { MessageContext } from "vk-io/lib/structures";
import { NewVkMessage } from "../entities/NewVkMessage";
import { VkUser } from "../entities/VkUser";
import { BaseService } from "./BaseService";

import { AccountProfileInfo } from "../entities/AccountProfileInfo";
import { ShortChatInfo } from "../entities/ShortChatInfo";
import { VkServiceEventTypeEnum } from "../enums/VkServiceEventTypeEnum";
import { BaseServiceProps } from "./BaseService";
import type { VkAuthService } from "./VkAuthService";

export interface VkServiceProps extends BaseServiceProps {
  vkAuthService: VkAuthService;
}

export type VkServiceEvents = {
  [VkServiceEventTypeEnum.NEW_MESSAGE]: (message: NewVkMessage) => void;
  [VkServiceEventTypeEnum.ACCOUNT_PROFILE_INFO]: (
    profileInfo: AccountProfileInfo
  ) => void;
};

export class VkService extends BaseService<VkServiceEvents> {
  vk: VK;
  vkAuthService: VkAuthService;

  constructor(props: VkServiceProps) {
    super(props);
    this.vkAuthService = props.vkAuthService;
  }

  async newMessageHandler(context: MessageContext, next: Function) {
    const message: NewVkMessage = {
      createdAt: context.createdAt,
      text: context.text,
      senderId: context.senderId,
      chatId: context.chatId,
      peerId: context.peerId,
      attachments: context.attachments.map((x) => ({
        type: x.type,
        path: x.toString(),
      })),
    };
    this.emitter.emit(VkServiceEventTypeEnum.NEW_MESSAGE, message);
    return next();
  }

  async loadProfileInfo() {
    const profile = await this.vk.api.account.getProfileInfo({});
    this.emitter.emit(VkServiceEventTypeEnum.ACCOUNT_PROFILE_INFO, profile);
  }

  async startPolling() {
    this.vk = new VK({ token: await this.vkAuthService.getToken() });

    const updates = new Updates({
      api: this.vk.api,
      upload: this.vk.upload,
    });

    updates.on("message", this.newMessageHandler.bind(this));

    await this.loadProfileInfo();
    await updates.startPolling();
  }

  async getConversationChatSettingsByPeerId(
    peerId: number,
    chatId: number
  ): Promise<ShortChatInfo | null> {
    const list = await this.vk.api.messages.getConversationsById({
      peer_ids: peerId,
    });
    if (list.items.length === 0) {
      return null;
    }

    const chatSettings = list.items[0].chat_settings;
    return {
      title: chatSettings.title,
      membersCount: chatSettings.members_count,
      chatId,
    };
  }

  async gerUserById(userId: number): Promise<VkUser | null> {
    const usersResponse = await this.vk.api.users.get({
      user_ids: [userId],
    });
    if (usersResponse.length === 0) {
      return null;
    }
    const user = usersResponse[0];

    const vkUser: VkUser = {
      id: user.id,
      sex: user.sex,
      firstName: user.first_name,
      lastName: user.last_name,
      birthday: user.bdate,
    };
    return vkUser;
  }
}
