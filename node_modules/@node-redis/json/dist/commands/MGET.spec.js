"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const MGET_1 = require("./MGET");
describe('MGET', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, MGET_1.transformArguments)(['1', '2'], '$'), ['JSON.MGET', '1', '2', '$']);
    });
    test_utils_1.default.testWithClient('client.json.mGet', async (client) => {
        assert_1.strict.deepEqual(await client.json.mGet(['1', '2'], '$'), [null, null]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
