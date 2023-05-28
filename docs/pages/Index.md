VK Collector / [Exports](modules.md)

# VK Collector

## _Description_
This app collect all incoming messages from VK and send http requests

## _Design_
### Definitions
|               |                        |
| ------------- | ---------------------- |
| Entity, Enums | Business logic units   |
| Service       | Business logic service |

### Services
#### `services.BaseService`
| attribute | type           |
| --------- | -------------- |
| `logger`  | `Logger`       |
| `emitter` | `EventEmitter` |

#### Features:
- Services communicate with each other using EventEmitter
- Service can subscribe on referenced services events

## _Workflow_
1. `VkAuthService` generate token
2. `ProcessingService` subscribe on `VkService` events
3. `VkService.startPolling()` start watching updates
4. `ProcessingService` will send webhooks

## [_Configuration_](../pages/Configuration.md)

## [_Development_](../pages/Development.md)
