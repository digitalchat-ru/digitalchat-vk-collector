require(`dotenv-defaults`).config();

import logger from "./logger";
import { CallbackService } from "vk-io";
import ProcessingService from "./services/ProcessingService";
import ProcessingCacheService from "./services/ProcessingCacheService";
import VkService from "./services/VkService";
import VkAuthService from "./services/VkAuthService";
import RedisService from "./services/RedisService";

async function main() {
  const vkCredentials = {
    login: process.env.VK_LOGIN,
    password: process.env.VK_PASSWORD,
  };

  const redisService = new RedisService({
    logger,
    redisUrl: process.env.REDIS_URL,
    globalPrefix: `vk-collector/${vkCredentials.login}`,
  });
  await redisService.connect();

  const vkAuthService = new VkAuthService({
    logger,
    redisService,
    vkCredentials,
    callbackService: new CallbackService(),
  });

  const vkService = new VkService({
    logger,
    vkAuthService,
  });

  const processingService = new ProcessingService({
    logger,
    redisService,
    vkService,
    webhookUrl: process.env.WEBHOOK_URL,
    webhookApiToken: process.env.WEBHOOK_API_TOKEN,
    processingCacheService: new ProcessingCacheService({
      logger,
      redisService: redisService,
    }),
  });

  logger.info("Start polling");
  await vkService.startPolling();
}

main().catch(console.error);
