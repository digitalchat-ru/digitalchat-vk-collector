[VK Collector](../README.md) / [Exports](../modules.md) / [services/BaseService](../modules/services_BaseService.md) / default

# Class: default<Events\>

[services/BaseService](../modules/services_BaseService.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends `Record`<`string`, (...`args`: `any`[]) => `void`\> = {} |

## Hierarchy

- [`AbstractService`](services_BaseService.AbstractService.md)<[`BaseServiceProps`](../interfaces/services_BaseService.BaseServiceProps.md)\>

  ↳ **`default`**

  ↳↳ [`default`](services_ProcessingCacheService.default.md)

  ↳↳ [`default`](services_ProcessingService.default.md)

  ↳↳ [`default`](services_RedisService.default.md)

  ↳↳ [`default`](services_VkAuthService.default.md)

  ↳↳ [`default`](services_VkService.default.md)

## Table of contents

### Constructors

- [constructor](services_BaseService.default.md#constructor)

### Properties

- [emitter](services_BaseService.default.md#emitter)
- [logger](services_BaseService.default.md#logger)

### Methods

- [emit](services_BaseService.default.md#emit)
- [on](services_BaseService.default.md#on)

## Constructors

### constructor

• **new default**<`Events`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends `Record`<`string`, (...`args`: `any`[]) => `void`\> = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Overrides

[AbstractService](services_BaseService.AbstractService.md).[constructor](services_BaseService.AbstractService.md#constructor)

#### Defined in

[src/services/BaseService.ts:28](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L28)

## Properties

### emitter

• **emitter**: `EventEmitter`

#### Defined in

[src/services/BaseService.ts:16](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L16)

___

### logger

• **logger**: `Logger`

#### Defined in

[src/services/BaseService.ts:15](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L15)

## Methods

### emit

▸ **emit**<`U`\>(`event`, `listener`): [`default`](services_BaseService.default.md)<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | `Events`[`U`] |

#### Returns

[`default`](services_BaseService.default.md)<`Events`\>

#### Defined in

[src/services/BaseService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L23)

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`default`](services_BaseService.default.md)<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | `Events`[`U`] |

#### Returns

[`default`](services_BaseService.default.md)<`Events`\>

#### Defined in

[src/services/BaseService.ts:18](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L18)
