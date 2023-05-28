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
const BaseService_1 = require("./BaseService");
const USERS_CACHE_KEY = "processing/users";
const USERS_CACHE_EX = 60 * 60;
const CHATS_CACHE_KEY = "processing/chats";
const CHATS_CACHE_EX = 60 * 60;
class ProcessingCacheService extends BaseService_1.default {
    constructor(props) {
        super(props);
        this.redisService = props.redisService;
    }
    getUserFromCache(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield this.redisService.client.get(this.redisService.key(USERS_CACHE_KEY, userId));
            if (val !== null) {
                return JSON.parse(val);
            }
            return null;
        });
    }
    setUserCache(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.redisService.client.set(this.redisService.key(USERS_CACHE_KEY, user.id), JSON.stringify(user), {
                EX: USERS_CACHE_EX,
                NX: true,
            });
        });
    }
    getChatFromCache(chatId) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = yield this.redisService.client.get(this.redisService.key(CHATS_CACHE_KEY, chatId));
            if (val !== null) {
                return JSON.parse(val);
            }
            return null;
        });
    }
    setChatCache(chat) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.redisService.client.set(this.redisService.key(CHATS_CACHE_KEY, chat.chatId), JSON.stringify(chat), {
                EX: CHATS_CACHE_EX,
                NX: true,
            });
        });
    }
}
exports.default = ProcessingCacheService;
//# sourceMappingURL=ProcessingCacheService.js.map