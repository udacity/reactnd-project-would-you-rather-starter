"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const NUMINCRBY_1 = require("./NUMINCRBY");
describe('NUMINCRBY', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, NUMINCRBY_1.transformArguments)('key', '$', 1), ['JSON.NUMINCRBY', 'key', '$', '1']);
    });
    test_utils_1.default.testWithClient('client.json.numIncrBy', async (client) => {
        await client.json.set('key', '$', 0);
        assert_1.strict.deepEqual(await client.json.numIncrBy('key', '$', 1), [1]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
