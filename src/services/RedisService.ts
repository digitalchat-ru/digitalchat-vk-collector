import { createClient, RedisClientType } from "redis";
import type { BaseServiceProps } from "./BaseService";
import BaseService from "./BaseService";

export interface RedisServiceServiceProps extends BaseServiceProps {
  redisUrl: string;
  globalPrefix: string;
}

export default class RedisService extends BaseService {
  client: RedisClientType;
  globalPrefix: string;

  constructor(props: RedisServiceServiceProps) {
    super(props);
    this.client = createClient({
      url: props.redisUrl,
    });
    this.globalPrefix = props.globalPrefix;
  }

  key(...key: any[]) {
    const keyStr = key.map((x) => x.toString()).join("/");
    return `${this.globalPrefix}/${keyStr}`;
  }

  async connect() {
    await this.client.connect();
  }
}
