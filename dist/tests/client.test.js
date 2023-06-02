"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client1 = exports.client = void 0;
var index_1 = require("../index");
var mockConfig = {
    apiKey: '1234',
};
exports.client = new index_1.Client(mockConfig.apiKey, { "backendUrl": "http://localhost:8080" });
exports.client1 = new index_1.Client(mockConfig.apiKey, {});
//# sourceMappingURL=client.test.js.map