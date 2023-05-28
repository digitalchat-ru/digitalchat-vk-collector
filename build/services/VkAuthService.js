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
const authorization_1 = require("@vk-io/authorization");
const BaseService_1 = require("./BaseService");
const TOKEN_CACHE_KEY = "token";
class VkAuthService extends BaseService_1.default {
    constructor(props) {
        super(props);
        this.requestPromise = new authorization_1.DirectAuthorization(Object.assign(Object.assign({ callbackService: props.callbackService, scope: "all" }, authorization_1.officialAppCredentials.android), { login: props.vkCredentials.login, password: props.vkCredentials.password, apiVersion: "5.131" }));
        this.redisService = props.redisService;
        this.vkCredentials = props.vkCredentials;
    }
    authorize() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestPromise.run();
        });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheKey = this.redisService.key(TOKEN_CACHE_KEY);
            const cacheToken = yield this.redisService.client.get(cacheKey);
            if (cacheToken) {
                this.logger.info(`Get token from cache`);
                this.logger.debug(`Token: ${cacheToken}`);
                return cacheToken;
            }
            let vkToken;
            this.logger.info("Getting token..");
            try {
                const _res = yield this.authorize();
                vkToken = _res.token;
                this.logger.info("Token retreived");
                this.logger.debug(`Token: ${vkToken}; Expires at: ${_res.expires}`);
                this.redisService.client.set(cacheKey, vkToken, {
                    EXAT: _res.expires > 0 ? _res.expires : undefined,
                });
                return vkToken;
            }
            catch (err) {
                this.logger.error(err);
                throw err;
            }
        });
    }
}
exports.default = VkAuthService;
//# sourceMappingURL=VkAuthService.js.map