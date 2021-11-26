"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = void 0;
const test_utils_1 = require("@node-redis/test-utils");
const _1 = require(".");
exports.default = new test_utils_1.default({
    dockerImageName: 'redislabs/rejson',
    dockerImageVersionArgument: 'rejson-version',
    defaultDockerVersion: '2.0.2'
});
exports.GLOBAL = {
    SERVERS: {
        OPEN: {
            serverArguments: ['--loadmodule /usr/lib/redis/modules/rejson.so'],
            clientOptions: {
                modules: {
                    json: _1.default
                }
            }
        }
    }
};
