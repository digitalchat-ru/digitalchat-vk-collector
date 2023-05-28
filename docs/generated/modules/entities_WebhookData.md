[VK Collector](../README.md) / [Exports](../modules.md) / entities/WebhookData

# Module: entities/WebhookData

## Table of contents

### Type Aliases

- [WebhookData](entities_WebhookData.md#webhookdata)
- [WebhookPayload](entities_WebhookData.md#webhookpayload)

## Type Aliases

### WebhookData

Ƭ **WebhookData**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WebhookTypeEnum`](../enums/enums_WebhookTypeEnum.WebhookTypeEnum.md) = [`WebhookTypeEnum`](../enums/enums_WebhookTypeEnum.WebhookTypeEnum.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payload` | [`WebhookPayload`](entities_WebhookData.md#webhookpayload)[`T`] |
| `type` | `T` |

#### Defined in

[src/entities/WebhookData.ts:17](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/entities/WebhookData.ts#L17)

___

### WebhookPayload

Ƭ **WebhookPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `new_message` | { `chat`: [`ShortChatInfo`](../interfaces/entities_ShortChatInfo.ShortChatInfo.md) ; `message`: [`NewVkMessage`](../interfaces/entities_NewVkMessage.NewVkMessage.md) ; `sender`: [`VkUser`](../interfaces/entities_VkUser.VkUser.md)  } |
| `new_message.chat` | [`ShortChatInfo`](../interfaces/entities_ShortChatInfo.ShortChatInfo.md) |
| `new_message.message` | [`NewVkMessage`](../interfaces/entities_NewVkMessage.NewVkMessage.md) |
| `new_message.sender` | [`VkUser`](../interfaces/entities_VkUser.VkUser.md) |
| `profile_loaded` | { `phone`: `string`  } |
| `profile_loaded.phone` | `string` |

#### Defined in

[src/entities/WebhookData.ts:6](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/entities/WebhookData.ts#L6)
