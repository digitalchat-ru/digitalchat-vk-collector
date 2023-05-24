import * as dotenv from 'dotenv'
import * as winston from "winston";
import VkService from "./services/VkService";
import VkAuthService from "./services/VkAuthService";
import {CallbackService} from "vk-io";
dotenv.config()

async function main() {
    const logger = winston.createLogger()
    const baseContext = {
        logger
    }

    const vkAuthService = new VkAuthService({
        ...baseContext,
        vkCredentials: {
            login: process.env.VK_LOGIN,
            password: process.env.VK_PASSWORD,
        },
        callbackService: new CallbackService()
    })
    const {token: vkToken} = await vkAuthService.run()

    const vkService = new VkService({
        ...baseContext,
        vkToken,
    })
    await vkService.run()
}

main().catch(console.error)
