"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const FORGET_1 = require("./FORGET");
describe('FORGET', () => {
    describe('transformArguments', () => {
        it('key', () => {
            assert_1.strict.deepEqual((0, FORGET_1.transformArguments)('key'), ['JSON.FORGET', 'key']);
        });
        it('key, path', () => {
            assert_1.strict.deepEqual((0, FORGET_1.transformArguments)('key', '$.path'), ['JSON.FORGET', 'key', '$.path']);
        });
    });
    test_utils_1.default.testWithClient('client.json.forget', async (client) => {
        assert_1.strict.deepEqual(await client.json.forget('key'), 0);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
