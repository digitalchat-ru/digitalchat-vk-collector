[VK Collector](../README.md) / [Exports](../modules.md) / [services/VkService](../modules/services_VkService.md) / default

# Class: default

[services/VkService](../modules/services_VkService.md).default

## Hierarchy

- [`default`](services_BaseService.default.md)<`VkServiceEvents`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](services_VkService.default.md#constructor)

### Properties

- [emitter](services_VkService.default.md#emitter)
- [logger](services_VkService.default.md#logger)
- [vk](services_VkService.default.md#vk)
- [vkAuthService](services_VkService.default.md#vkauthservice)

### Methods

- [emit](services_VkService.default.md#emit)
- [gerUserById](services_VkService.default.md#geruserbyid)
- [getConversationChatSettingsByPeerId](services_VkService.default.md#getconversationchatsettingsbypeerid)
- [loadProfileInfo](services_VkService.default.md#loadprofileinfo)
- [newMessageHandler](services_VkService.default.md#newmessagehandler)
- [on](services_VkService.default.md#on)
- [startPolling](services_VkService.default.md#startpolling)

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`VkServiceProps`](../interfaces/services_VkService.VkServiceProps.md) |

#### Overrides

[default](services_BaseService.default.md).[constructor](services_BaseService.default.md#constructor)

#### Defined in

[src/services/VkService.ts:27](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L27)

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

### vk

• **vk**: `VK`

#### Defined in

[src/services/VkService.ts:24](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L24)

___

### vkAuthService

• **vkAuthService**: [`default`](services_VkAuthService.default.md)

#### Defined in

[src/services/VkService.ts:25](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L25)

## Methods

### emit

▸ **emit**<`U`\>(`event`, `listener`): [`default`](services_VkService.default.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof `VkServiceEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | `VkServiceEvents`[`U`] |

#### Returns

[`default`](services_VkService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[emit](services_BaseService.default.md#emit)

#### Defined in

[src/services/BaseService.ts:23](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L23)

___

### gerUserById

▸ **gerUserById**(`userId`): `Promise`<[`VkUser`](../interfaces/entities_VkUser.VkUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |

#### Returns

`Promise`<[`VkUser`](../interfaces/entities_VkUser.VkUser.md)\>

#### Defined in

[src/services/VkService.ts:86](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L86)

___

### getConversationChatSettingsByPeerId

▸ **getConversationChatSettingsByPeerId**(`peerId`, `chatId`): `Promise`<[`ShortChatInfo`](../interfaces/entities_ShortChatInfo.ShortChatInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerId` | `number` |
| `chatId` | `number` |

#### Returns

`Promise`<[`ShortChatInfo`](../interfaces/entities_ShortChatInfo.ShortChatInfo.md)\>

#### Defined in

[src/services/VkService.ts:67](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L67)

___

### loadProfileInfo

▸ **loadProfileInfo**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/VkService.ts:48](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L48)

___

### newMessageHandler

▸ **newMessageHandler**(`context`, `next`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `MessageContext`<`ContextDefaultState`\> |
| `next` | `Function` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/VkService.ts:32](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L32)

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`default`](services_VkService.default.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof `VkServiceEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | `VkServiceEvents`[`U`] |

#### Returns

[`default`](services_VkService.default.md)

#### Inherited from

[default](services_BaseService.default.md).[on](services_BaseService.default.md#on)

#### Defined in

[src/services/BaseService.ts:18](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/BaseService.ts#L18)

___

### startPolling

▸ **startPolling**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/services/VkService.ts:53](https://github.com/digitalchat-ru/digitalchat-vk-collector/blob/f91fa2b/src/services/VkService.ts#L53)
