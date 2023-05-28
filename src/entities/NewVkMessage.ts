export declare interface NewVkMessageAttachment {
  type: string;
  path: string;
}

export declare interface NewVkMessage {
  createdAt: number;
  text?: string;
  senderId: number;
  chatId?: number;
  peerId: number;
  attachments: NewVkMessageAttachment[];
}
