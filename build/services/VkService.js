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
const vk_io_1 = require("vk-io");
const BaseService_1 = require("./BaseService");
const VkServiceEventTypeEnum_1 = require("../enums/VkServiceEventTypeEnum");
class VkService extends BaseService_1.default {
    constructor(props) {
        super(props);
        this.vkAuthService = props.vkAuthService;
    }
    newMessageHandler(context, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = {
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
            this.emitter.emit(VkServiceEventTypeEnum_1.VkServiceEventTypeEnum.NEW_MESSAGE, message);
            return next();
        });
    }
    loadProfileInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.vk.api.account.getProfileInfo({});
            this.emitter.emit(VkServiceEventTypeEnum_1.VkServiceEventTypeEnum.ACCOUNT_PROFILE_INFO, profile);
        });
    }
    startPolling() {
        return __awaiter(this, void 0, void 0, function* () {
            this.vk = new vk_io_1.VK({ token: yield this.vkAuthService.getToken() });
            const updates = new vk_io_1.Updates({
                api: this.vk.api,
                upload: this.vk.upload,
            });
            updates.on("message", this.newMessageHandler.bind(this));
            yield this.loadProfileInfo();
            yield updates.startPolling();
        });
    }
    getConversationChatSettingsByPeerId(peerId, chatId) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.vk.api.messages.getConversationsById({
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
        });
    }
    gerUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersResponse = yield this.vk.api.users.get({
                user_ids: [userId],
            });
            if (usersResponse.length === 0) {
                return null;
            }
            const user = usersResponse[0];
            const vkUser = {
                id: user.id,
                sex: user.sex,
                firstName: user.first_name,
                lastName: user.last_name,
                birthday: user.bdate,
            };
            return vkUser;
        });
    }
}
exports.default = VkService;
//# sourceMappingURL=VkService.js.map