import {
  DirectAuthorization,
  officialAppCredentials,
} from "@vk-io/authorization";
import { CallbackService } from "vk-io";
import type { BaseServiceProps } from "./BaseService";
import BaseService from "./BaseService";
import RedisService from "./RedisService";

type VkCredentials = { login: string; password: string };

export interface VkAuthServiceProps extends BaseServiceProps {
  vkCredentials: VkCredentials;
  callbackService: CallbackService;
  redisService: RedisService;
}

const TOKEN_CACHE_KEY = "token";

export default class VkAuthService extends BaseService {
  requestPromise: DirectAuthorization;
  redisService: RedisService;
  vkCredentials: VkCredentials;

  constructor(props: VkAuthServiceProps) {
    super(props);
    this.requestPromise = new DirectAuthorization({
      callbackService: props.callbackService,
      scope: "all",
      ...officialAppCredentials.android,
      login: props.vkCredentials.login,
      password: props.vkCredentials.password,
      apiVersion: "5.131",
    });
    this.redisService = props.redisService;
    this.vkCredentials = props.vkCredentials;
  }

  async authorize() {
    return await this.requestPromise.run();
  }

  async getToken() {
    const cacheKey = this.redisService.key(TOKEN_CACHE_KEY);
    const cacheToken = await this.redisService.client.get(cacheKey);
    if (cacheToken) {
      this.logger.info(`Get token from cache`);
      this.logger.debug(`Token: ${cacheToken}`);
      return cacheToken;
    }

    let vkToken: string;
    this.logger.info("Getting token..");
    try {
      const _res = await this.authorize();
      vkToken = _res.token;
      this.logger.info("Token retreived");
      this.logger.debug(`Token: ${vkToken}; Expires at: ${_res.expires}`);
      this.redisService.client.set(cacheKey, vkToken, {
        EXAT: _res.expires > 0 ? _res.expires : undefined,
      });
      return vkToken;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
