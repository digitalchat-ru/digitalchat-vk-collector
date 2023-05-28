"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debugAxiosResponse(logger, response) {
    logger.debug(`Status: ${response.status}`);
    logger.debug(response);
}
exports.default = debugAxiosResponse;
//# sourceMappingURL=debugAxiosResponse.js.map