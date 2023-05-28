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
require(`dotenv-defaults`).config();
const logger_1 = require("./logger");
const vk_io_1 = require("vk-io");
const ProcessingService_1 = require("./services/ProcessingService");
const ProcessingCacheService_1 = require("./services/ProcessingCacheService");
const VkService_1 = require("./services/VkService");
const VkAuthService_1 = require("./services/VkAuthService");
const RedisService_1 = require("./services/RedisService");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const vkCredentials = {
            login: process.env.VK_LOGIN,
            password: process.env.VK_PASSWORD,
        };
        const redisService = new RedisService_1.default({
            logger: logger_1.default,
            redisUrl: process.env.REDIS_URL,
            globalPrefix: `vk-collector/${vkCredentials.login}`,
        });
        yield redisService.connect();
        const vkAuthService = new VkAuthService_1.default({
            logger: logger_1.default,
            redisService,
            vkCredentials,
            callbackService: new vk_io_1.CallbackService(),
        });
        const vkService = new VkService_1.default({
            logger: logger_1.default,
            vkAuthService,
        });
        const processingService = new ProcessingService_1.default({
            logger: logger_1.default,
            redisService,
            vkService,
            webhookUrl: process.env.WEBHOOK_URL,
            webhookApiToken: process.env.WEBHOOK_API_TOKEN,
            processingCacheService: new ProcessingCacheService_1.default({
                logger: logger_1.default,
                redisService: redisService,
            }),
        });
        logger_1.default.info("Start polling");
        yield vkService.startPolling();
    });
}
main().catch(console.error);
//# sourceMappingURL=index.js.map