"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const DEL_1 = require("./DEL");
describe('DEL', () => {
    describe('transformArguments', () => {
        it('key', () => {
            assert_1.strict.deepEqual((0, DEL_1.transformArguments)('key'), ['JSON.DEL', 'key']);
        });
        it('key, path', () => {
            assert_1.strict.deepEqual((0, DEL_1.transformArguments)('key', '$.path'), ['JSON.DEL', 'key', '$.path']);
        });
    });
    test_utils_1.default.testWithClient('client.json.del', async (client) => {
        assert_1.strict.deepEqual(await client.json.del('key'), 0);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
