"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newClient = exports.Client = void 0;
__exportStar(require("./types"), exports);
__exportStar(require("./errors"), exports);
var client_1 = require("./client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_1.Client; } });
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