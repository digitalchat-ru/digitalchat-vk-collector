[VK Collector](../README.md) / [Exports](../modules.md) / [services/ProcessingService](../modules/services_ProcessingService.md) / default

# Class: default

[services/ProcessingService](../modules/services_ProcessingService.md).default

## Hierarchy

- [`default`](services_BaseService.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](services_ProcessingService.default.md#constructor)

### Properties

- [emitter](services_ProcessingService.default.md#emitter)
- [logger](services_ProcessingService.default.md#logger)
- [processingCacheService](services_ProcessingService.default.md#processingcacheservice)
- [redisService](services_ProcessingService.default.md#redisservice)
- [vkService](services_ProcessingService.default.md#vkservice)
- [webhookApiToken](services_ProcessingService.default.md#webhookapitoken)
- [webhookUrl](services_ProcessingService.default.md#webhookurl)

### Methods

- [emit](services_ProcessingService.default.md#emit)
- [on](services_ProcessingService.default.md#on)
- [processNewMessage](services_ProcessingService.default.md#processnewmessage)
- [sendWebhook](services_ProcessingService.default.md#sendwebhook)

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ProcessingServiceProps`](../interfaces/services_ProcessingService.ProcessingServiceProps.md) |

#### Overrides

[default](services_BaseService.default.md).[constructor](services_BaseService.default.md#constructor)

#### Defined in

[src/services/ProcessingService.ts:29](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L29)

## Properties

### emitter

• **emitter**: `EventEmitter`

#### Inherited from

[default](services_BaseService.default.md).[emitter](services_BaseService.default.md#emitter)

#### Defined in

[src/services/BaseService.ts:16](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L16)

___

### logger

• **logger**: `Logger`

#### Inherited from

[default](services_BaseService.default.md).[logger](services_BaseService.default.md#logger)

#### Defined in

[src/services/BaseService.ts:15](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L15)

___

### processingCacheService

• **processingCacheService**: [`default`](services_ProcessingCacheService.default.md)

#### Defined in

[src/services/ProcessingService.ts:27](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L27)

___

### redisService

• **redisService**: [`default`](services_RedisService.default.md)

#### Defined in

[src/services/ProcessingService.ts:26](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L26)

___

### vkService

• **vkService**: [`default`](services_VkService.default.md)

#### Defined in

[src/services/ProcessingService.ts:25](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L25)

___

### webhookApiToken

• **webhookApiToken**: `string`

#### Defined in

[src/services/ProcessingService.ts:24](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L24)

___

### webhookUrl

• `Optional` **webhookUrl**: `string`

#### Defined in

[src/services/ProcessingService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L23)

## Methods

### emit

▸ **emit**<`U`\>(`event`, `listener`): [`default`](services_ProcessingService.default.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | {}[`U`] |

#### Returns

[`default`](services_ProcessingService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[emit](services_BaseService.default.md#emit)

#### Defined in

[src/services/BaseService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L23)

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`default`](services_ProcessingService.default.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | {}[`U`] |

#### Returns

[`default`](services_ProcessingService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[on](services_BaseService.default.md#on)

#### Defined in

[src/services/BaseService.ts:18](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L18)

___

### processNewMessage

▸ **processNewMessage**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`NewVkMessage`](../interfaces/entities_NewVkMessage.NewVkMessage.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/ProcessingService.ts:52](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L52)

___

### sendWebhook

▸ **sendWebhook**(`webhook`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhook` | [`WebhookData`](../modules/entities_WebhookData.md#webhookdata) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/services/ProcessingService.ts:97](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingService.ts#L97)
