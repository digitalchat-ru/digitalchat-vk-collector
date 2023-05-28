import { WebhookTypeEnum } from "../enums/WebhookTypeEnum";
import { NewVkMessage } from "./NewVkMessage";
import { ShortChatInfo } from "./ShortChatInfo";
import { VkUser } from "./VkUser";

export type WebhookPayload = {
  [WebhookTypeEnum.NEW_MESSAGE]: {
    message: NewVkMessage;
    sender: VkUser;
    chat: ShortChatInfo;
  };
  [WebhookTypeEnum.PROFILE_LOADED]: {
    phone: string;
  };
};

export type WebhookData<T extends WebhookTypeEnum = WebhookTypeEnum> = {
  type: T;
  payload: WebhookPayload[T];
};
