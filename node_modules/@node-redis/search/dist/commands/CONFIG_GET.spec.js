"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const CONFIG_GET_1 = require("./CONFIG_GET");
describe('CONFIG GET', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, CONFIG_GET_1.transformArguments)('TIMEOUT'), ['FT.CONFIG', 'GET', 'TIMEOUT']);
    });
    test_utils_1.default.testWithClient('client.ft.configGet', async (client) => {
        assert_1.strict.deepEqual(await client.ft.configGet('TIMEOUT'), Object.create(null, {
            TIMEOUT: {
                value: '500',
                configurable: true,
                enumerable: true
            }
        }));
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
