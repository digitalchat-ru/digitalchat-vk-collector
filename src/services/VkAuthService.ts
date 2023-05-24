import {CallbackService} from "vk-io";
import {DirectAuthorization, officialAppCredentials} from "@vk-io/authorization";
import BaseService from "./BaseService";
import type {BaseServiceProps} from "./BaseService"

export interface VkAuthServiceProps extends BaseServiceProps {
    vkCredentials: { login: string, password: string },
    callbackService: CallbackService,
}

export default class VkAuthService extends BaseService {
    requestPromise: DirectAuthorization

    constructor(props: VkAuthServiceProps) {
        super(props);
        this.requestPromise = new DirectAuthorization({
            callbackService: props.callbackService,
            scope: 'all',
            ...officialAppCredentials.android,
            login: props.vkCredentials.login,
            password: props.vkCredentials.password,
            apiVersion: '5.131',
        })
    }

    async run() {
        return await this.requestPromise.run()
    }
}