"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractService = void 0;
const node_events_1 = require("node:events");
class AbstractService {
    constructor(props) { }
}
exports.AbstractService = AbstractService;
class BaseService extends AbstractService {
    on(event, listener) {
        this.emitter.on(event.toString(), listener);
        return this;
    }
    constructor(props) {
        super(props);
        this.logger = props.logger;
        this.emitter = new node_events_1.EventEmitter();
    }
}
exports.default = BaseService;
//# sourceMappingURL=BaseService.js.map