"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./types"));
__export(require("./errors"));
var client_1 = require("./client");
exports.Client = client_1.Client;
const client_2 = require("./client");
/**
 * Initialize IRITA SDK
 *
 * @param config IRITA SDK [[ClientConfig]]
 *
 * @returns New IRITA SDK Instance
 */
function newClient(config) {
    const copyConfig = new client_2.DefaultClientConfig();
    Object.assign(copyConfig, config);
    return new client_2.Client(copyConfig);
}
exports.newClient = newClient;
//# sourceMappingURL=index.js.map