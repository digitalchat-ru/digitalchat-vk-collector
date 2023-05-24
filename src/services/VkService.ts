import BaseService, {BaseServiceProps} from "./BaseService";
import {Updates, VK} from 'vk-io';
import {MessageContext} from "vk-io/lib/structures";

export interface VkServiceProps extends BaseServiceProps {
    vkToken: string
}

export default class VkService extends BaseService {
    vk: VK

    constructor(props: VkServiceProps) {
        super(props);
        this.vk = new VK({token: props.vkToken})
    }

    async messageHandler(context: MessageContext, next) {
        this.logger.debug("New message", context)
        return next()
    }

    async run() {
        const updates = new Updates({
            api: this.vk.api,
            upload: this.vk.upload,
        });

        updates.on('message', this.messageHandler)

        await updates.startPolling();
    }
}