[VK Collector](../README.md) / [Exports](../modules.md) / [services/VkAuthService](../modules/services_VkAuthService.md) / default

# Class: default

[services/VkAuthService](../modules/services_VkAuthService.md).default

## Hierarchy

- [`default`](services_BaseService.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](services_VkAuthService.default.md#constructor)

### Properties

- [emitter](services_VkAuthService.default.md#emitter)
- [logger](services_VkAuthService.default.md#logger)
- [redisService](services_VkAuthService.default.md#redisservice)
- [requestPromise](services_VkAuthService.default.md#requestpromise)
- [vkCredentials](services_VkAuthService.default.md#vkcredentials)

### Methods

- [authorize](services_VkAuthService.default.md#authorize)
- [emit](services_VkAuthService.default.md#emit)
- [getToken](services_VkAuthService.default.md#gettoken)
- [on](services_VkAuthService.default.md#on)

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VkAuthServiceProps`](../interfaces/services_VkAuthService.VkAuthServiceProps.md) |

#### Overrides

[default](services_BaseService.default.md).[constructor](services_BaseService.default.md#constructor)

#### Defined in

[src/services/VkAuthService.ts:25](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkAuthService.ts#L25)

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

[src/services/VkAuthService.ts:22](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkAuthService.ts#L22)

___

### requestPromise

• **requestPromise**: `DirectAuthorization`

#### Defined in

[src/services/VkAuthService.ts:21](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkAuthService.ts#L21)

___

### vkCredentials

• **vkCredentials**: `VkCredentials`

#### Defined in

[src/services/VkAuthService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkAuthService.ts#L23)

## Methods

### authorize

▸ **authorize**(): `Promise`<{ `email?`: `string` ; `expires`: `number` ; `token`: `string` ; `user`: `number`  }\>

#### Returns

`Promise`<{ `email?`: `string` ; `expires`: `number` ; `token`: `string` ; `user`: `number`  }\>

#### Defined in

[src/services/VkAuthService.ts:39](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkAuthService.ts#L39)

___

### emit

▸ **emit**<`U`\>(`event`, `listener`): [`default`](services_VkAuthService.default.md)

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

[`default`](services_VkAuthService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[emit](services_BaseService.default.md#emit)

#### Defined in

[src/services/BaseService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L23)

___

### getToken

▸ **getToken**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/services/VkAuthService.ts:43](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkAuthService.ts#L43)

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`default`](services_VkAuthService.default.md)

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

[`default`](services_VkAuthService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[on](services_BaseService.default.md#on)

#### Defined in

[src/services/BaseService.ts:18](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L18)
