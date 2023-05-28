import { Logger } from "winston";
import { EventEmitter } from "node:events";

export class AbstractService<_T> {
  constructor(props: _T) {}
}

export interface BaseServiceProps {
  logger: Logger;
}

export class BaseService<
  Events extends Record<string, (...args: any[]) => void> = {}
> extends AbstractService<BaseServiceProps> {
  logger: Logger;
  emitter: EventEmitter;

  on<U extends keyof Events>(event: U, listener: Events[U]): this {
    this.emitter.on(event.toString(), listener);
    return this;
  }

  emit<U extends keyof Events>(event: U, listener: Events[U]): this {
    this.emitter.emit(event.toString(), listener);
    return this;
  }

  constructor(props) {
    super(props);
    this.logger = props.logger;
    this.emitter = new EventEmitter();
  }
}
