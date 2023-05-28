import { ShortChatInfo } from "../entities/ShortChatInfo";
import { VkUser } from "../entities/VkUser";
import { BaseService, BaseServiceProps } from "./BaseService";
import { RedisService } from "./RedisService";

const USERS_CACHE_KEY = "processing/users";
const USERS_CACHE_EX = 60 * 60;

const CHATS_CACHE_KEY = "processing/chats";
const CHATS_CACHE_EX = 60 * 60;

export interface ProcessingCacheServiceProps extends BaseServiceProps {
  redisService: RedisService;
}

export class ProcessingCacheService extends BaseService {
  redisService: RedisService;

  constructor(props: ProcessingCacheServiceProps) {
    super(props);
    this.redisService = props.redisService;
  }

  async getUserFromCache(userId: number): Promise<VkUser | null> {
    const val = await this.redisService.client.get(
      this.redisService.key(USERS_CACHE_KEY, userId)
    );
    if (val !== null) {
      return JSON.parse(val);
    }
    return null;
  }

  async setUserCache(user: VkUser) {
    await this.redisService.client.set(
      this.redisService.key(USERS_CACHE_KEY, user.id),
      JSON.stringify(user),
      {
        EX: USERS_CACHE_EX,
        NX: true,
      }
    );
  }

  async getChatFromCache(chatId: number): Promise<ShortChatInfo | null> {
    const val = await this.redisService.client.get(
      this.redisService.key(CHATS_CACHE_KEY, chatId)
    );
    if (val !== null) {
      return JSON.parse(val);
    }
    return null;
  }

  async setChatCache(chat: ShortChatInfo) {
    await this.redisService.client.set(
      this.redisService.key(CHATS_CACHE_KEY, chat.chatId),
      JSON.stringify(chat),
      {
        EX: CHATS_CACHE_EX,
        NX: true,
      }
    );
  }
}
