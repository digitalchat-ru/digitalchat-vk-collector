# Module: entities/WebhookData

## Table of contents

### Type Aliases

- [WebhookData](../wiki/entities.WebhookData#webhookdata)
- [WebhookPayload](../wiki/entities.WebhookData#webhookpayload)

## Type Aliases

### WebhookData

Ƭ **WebhookData**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WebhookTypeEnum`](../wiki/enums.WebhookTypeEnum.WebhookTypeEnum) = [`WebhookTypeEnum`](../wiki/enums.WebhookTypeEnum.WebhookTypeEnum) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payload` | [`WebhookPayload`](../wiki/entities.WebhookData#webhookpayload)[`T`] |
| `type` | `T` |

#### Defined in

entities/WebhookData.ts:17

___

### WebhookPayload

Ƭ **WebhookPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `new_message` | { `chat`: [`ShortChatInfo`](../wiki/entities.ShortChatInfo.ShortChatInfo) ; `message`: [`NewVkMessage`](../wiki/entities.NewVkMessage.NewVkMessage) ; `sender`: [`VkUser`](../wiki/entities.VkUser.VkUser)  } |
| `new_message.chat` | [`ShortChatInfo`](../wiki/entities.ShortChatInfo.ShortChatInfo) |
| `new_message.message` | [`NewVkMessage`](../wiki/entities.NewVkMessage.NewVkMessage) |
| `new_message.sender` | [`VkUser`](../wiki/entities.VkUser.VkUser) |
| `profile_loaded` | { `phone`: `string`  } |
| `profile_loaded.phone` | `string` |

#### Defined in

entities/WebhookData.ts:6
