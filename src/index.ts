import * as dotenv from "dotenv-defaults";
dotenv.config();

import { CallbackService } from "vk-io";
import * as winston from "winston";
import logger from "./logger";
import * as services from "./services";

async function main() {
  if (process.env.NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: winston.format.combine(winston.format.prettyPrint()),
      })
    );
  } else {
    logger.add(new winston.transports.Console());
  }

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
