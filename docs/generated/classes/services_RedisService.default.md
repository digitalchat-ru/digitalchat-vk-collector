[VK Collector](../README.md) / [Exports](../modules.md) / [services/RedisService](../modules/services_RedisService.md) / default

# Class: default

[services/RedisService](../modules/services_RedisService.md).default

## Hierarchy

- [`default`](services_BaseService.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](services_RedisService.default.md#constructor)

### Properties

- [client](services_RedisService.default.md#client)
- [emitter](services_RedisService.default.md#emitter)
- [globalPrefix](services_RedisService.default.md#globalprefix)
- [logger](services_RedisService.default.md#logger)

### Methods

- [connect](services_RedisService.default.md#connect)
- [emit](services_RedisService.default.md#emit)
- [key](services_RedisService.default.md#key)
- [on](services_RedisService.default.md#on)

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RedisServiceServiceProps`](../interfaces/services_RedisService.RedisServiceServiceProps.md) |

#### Overrides

[default](services_BaseService.default.md).[constructor](services_BaseService.default.md#constructor)

#### Defined in

[src/services/RedisService.ts:14](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/RedisService.ts#L14)

## Properties

### client

• **client**: `RedisClientType`

#### Defined in

[src/services/RedisService.ts:11](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/RedisService.ts#L11)

___

### emitter

• **emitter**: `EventEmitter`

#### Inherited from

[default](services_BaseService.default.md).[emitter](services_BaseService.default.md#emitter)

#### Defined in

[src/services/BaseService.ts:16](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L16)

___

### globalPrefix

• **globalPrefix**: `string`

#### Defined in

[src/services/RedisService.ts:12](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/RedisService.ts#L12)

___

### logger

• **logger**: `Logger`

#### Inherited from

[default](services_BaseService.default.md).[logger](services_BaseService.default.md#logger)

#### Defined in

[src/services/BaseService.ts:15](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L15)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/RedisService.ts:27](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/RedisService.ts#L27)

___

### emit

▸ **emit**<`U`\>(`event`, `listener`): [`default`](services_RedisService.default.md)

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

[`default`](services_RedisService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[emit](services_BaseService.default.md#emit)

#### Defined in

[src/services/BaseService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L23)

___

### key

▸ **key**(`...key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...key` | `any`[] |

#### Returns

`string`

#### Defined in

[src/services/RedisService.ts:22](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/RedisService.ts#L22)

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`default`](services_RedisService.default.md)

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

[`default`](services_RedisService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[on](services_BaseService.default.md#on)

#### Defined in

[src/services/BaseService.ts:18](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L18)
