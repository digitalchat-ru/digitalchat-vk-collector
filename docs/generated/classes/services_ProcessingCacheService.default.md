[VK Collector](../README.md) / [Exports](../modules.md) / [services/ProcessingCacheService](../modules/services_ProcessingCacheService.md) / default

# Class: default

[services/ProcessingCacheService](../modules/services_ProcessingCacheService.md).default

## Hierarchy

- [`default`](services_BaseService.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](services_ProcessingCacheService.default.md#constructor)

### Properties

- [emitter](services_ProcessingCacheService.default.md#emitter)
- [logger](services_ProcessingCacheService.default.md#logger)
- [redisService](services_ProcessingCacheService.default.md#redisservice)

### Methods

- [emit](services_ProcessingCacheService.default.md#emit)
- [getChatFromCache](services_ProcessingCacheService.default.md#getchatfromcache)
- [getUserFromCache](services_ProcessingCacheService.default.md#getuserfromcache)
- [on](services_ProcessingCacheService.default.md#on)
- [setChatCache](services_ProcessingCacheService.default.md#setchatcache)
- [setUserCache](services_ProcessingCacheService.default.md#setusercache)

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ProcessingCacheServiceProps`](../interfaces/services_ProcessingCacheService.ProcessingCacheServiceProps.md) |

#### Overrides

[default](services_BaseService.default.md).[constructor](services_BaseService.default.md#constructor)

#### Defined in

[src/services/ProcessingCacheService.ts:19](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingCacheService.ts#L19)

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

### redisService

• **redisService**: [`default`](services_RedisService.default.md)

#### Defined in

[src/services/ProcessingCacheService.ts:17](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingCacheService.ts#L17)

## Methods

### emit

▸ **emit**<`U`\>(`event`, `listener`): [`default`](services_ProcessingCacheService.default.md)

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

[`default`](services_ProcessingCacheService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[emit](services_BaseService.default.md#emit)

#### Defined in

[src/services/BaseService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L23)

___

### getChatFromCache

▸ **getChatFromCache**(`chatId`): `Promise`<[`ShortChatInfo`](../interfaces/entities_ShortChatInfo.ShortChatInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `number` |

#### Returns

`Promise`<[`ShortChatInfo`](../interfaces/entities_ShortChatInfo.ShortChatInfo.md)\>

#### Defined in

[src/services/ProcessingCacheService.ts:45](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingCacheService.ts#L45)

___

### getUserFromCache

▸ **getUserFromCache**(`userId`): `Promise`<[`VkUser`](../interfaces/entities_VkUser.VkUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |

#### Returns

`Promise`<[`VkUser`](../interfaces/entities_VkUser.VkUser.md)\>

#### Defined in

[src/services/ProcessingCacheService.ts:24](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingCacheService.ts#L24)

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`default`](services_ProcessingCacheService.default.md)

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

[`default`](services_ProcessingCacheService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[on](services_BaseService.default.md#on)

#### Defined in

[src/services/BaseService.ts:18](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L18)

___

### setChatCache

▸ **setChatCache**(`chat`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ShortChatInfo`](../interfaces/entities_ShortChatInfo.ShortChatInfo.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/ProcessingCacheService.ts:55](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingCacheService.ts#L55)

___

### setUserCache

▸ **setUserCache**(`user`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`VkUser`](../interfaces/entities_VkUser.VkUser.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/ProcessingCacheService.ts:34](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/ProcessingCacheService.ts#L34)
