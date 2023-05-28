"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const debugAxiosResponse_1 = require("../utils/debugAxiosResponse");
const BaseService_1 = require("./BaseService");
const WebhookTypeEnum_1 = require("../enums/WebhookTypeEnum");
const VkServiceEventTypeEnum_1 = require("../enums/VkServiceEventTypeEnum");
class ProcessingService extends BaseService_1.default {
    constructor(props) {
        super(props);
        this.webhookUrl = props.webhookUrl;
        this.webhookApiToken = props.webhookApiToken;
        this.redisService = props.redisService;
        this.vkService = props.vkService;
        this.processingCacheService = props.processingCacheService;
        this.vkService.emitter.on(VkServiceEventTypeEnum_1.VkServiceEventTypeEnum.NEW_MESSAGE, (message) => {
            this.processNewMessage(message);
        });
        this.vkService.emitter.on(VkServiceEventTypeEnum_1.VkServiceEventTypeEnum.ACCOUNT_PROFILE_INFO, (profile) => {
            this.sendWebhook({
                type: WebhookTypeEnum_1.WebhookTypeEnum.PROFILE_LOADED,
                payload: profile,
            });
        });
    }
    processNewMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`New message ${JSON.stringify(message)}`);
            if (!message.chatId) {
                return;
            }
            const userPromise = yield this.processingCacheService
                .getUserFromCache(message.senderId)
                .then((x) => __awaiter(this, void 0, void 0, function* () {
                if (x === null) {
                    const res = yield this.vkService.gerUserById(message.senderId);
                    this.processingCacheService.setUserCache(res);
                    return res;
                }
                return x;
            }));
            const chatPromise = this.processingCacheService
                .getChatFromCache(message.chatId)
                .then((x) => __awaiter(this, void 0, void 0, function* () {
                if (x === null) {
                    const res = yield this.vkService.getConversationChatSettingsByPeerId(message.peerId, message.chatId);
                    this.processingCacheService.setChatCache(res);
                    return res;
                }
                return x;
            }));
            const [user, chat] = yield Promise.all([userPromise, chatPromise]);
            const webhookSent = yield this.sendWebhook({
                type: WebhookTypeEnum_1.WebhookTypeEnum.NEW_MESSAGE,
                payload: {
                    message,
                    sender: user,
                    chat,
                },
            });
            if (webhookSent) {
            }
        });
    }
    sendWebhook(webhook) {
        return __awaiter(this, void 0, void 0, function* () {
            let webhookSent;
            try {
                yield axios_1.default.post(this.webhookUrl, webhook, {
                    headers: { Authorization: `Bearer ${this.webhookApiToken}` },
                });
                webhookSent = true;
            }
            catch (err) {
                if (axios_1.default.isAxiosError(err)) {
                    (0, debugAxiosResponse_1.default)(this.logger, err.response);
                }
                webhookSent = false;
            }
            return webhookSent;
        });
    }
}
exports.default = ProcessingService;
//# sourceMappingURL=ProcessingService.js.map