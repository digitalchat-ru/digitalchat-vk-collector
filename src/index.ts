require(`dotenv-defaults`).config();

import logger from "./logger";
import { CallbackService } from "vk-io";
import * as services from "./services";

async function main() {
  const vkCredentials = {
    login: process.env.VK_LOGIN,
    password: process.env.VK_PASSWORD,
  };

  const redisService = new services.RedisService({
    logger,
    redisUrl: process.env.REDIS_URL,
    globalPrefix: `vk-collector/${vkCredentials.login}`,
  });
  await redisService.connect();

  const vkAuthService = new services.VkAuthService({
    logger,
    redisService,
    vkCredentials,
    callbackService: new CallbackService(),
  });

  const vkService = new services.VkService({
    logger,
    vkAuthService,
  });

  const processingService = new services.ProcessingService({
    logger,
    redisService,
    vkService,
    webhookUrl: process.env.WEBHOOK_URL,
    webhookApiToken: process.env.WEBHOOK_API_TOKEN,
    processingCacheService: new services.ProcessingCacheService({
      logger,
      redisService: redisService,
    }),
  });

  logger.info("Start polling");
  await vkService.startPolling();
}

main().catch(console.error);
