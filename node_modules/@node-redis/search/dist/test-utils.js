"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = void 0;
const test_utils_1 = require("@node-redis/test-utils");
const _1 = require(".");
exports.default = new test_utils_1.default({
    dockerImageName: 'redislabs/redisearch',
    dockerImageVersionArgument: 'redisearch-version',
    defaultDockerVersion: '2.2.1'
});
exports.GLOBAL = {
    SERVERS: {
        OPEN: {
            serverArguments: ['--loadmodule /usr/lib/redis/modules/redisearch.so'],
            clientOptions: {
                modules: {
                    ft: _1.default
                }
            }
        }
    }
};
