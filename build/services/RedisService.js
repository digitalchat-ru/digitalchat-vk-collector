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
const redis_1 = require("redis");
const BaseService_1 = require("./BaseService");
class RedisService extends BaseService_1.default {
    constructor(props) {
        super(props);
        this.client = (0, redis_1.createClient)({
            url: props.redisUrl,
        });
        this.globalPrefix = props.globalPrefix;
    }
    key(...key) {
        const keyStr = key.map((x) => x.toString()).join("/");
        return `${this.globalPrefix}/${keyStr}`;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
        });
    }
}
exports.default = RedisService;
//# sourceMappingURL=RedisService.js.map