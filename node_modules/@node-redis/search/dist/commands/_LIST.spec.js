"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const _LIST_1 = require("./_LIST");
describe('_LIST', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, _LIST_1.transformArguments)(), ['FT._LIST']);
    });
    test_utils_1.default.testWithClient('client.ft._list', async (client) => {
        assert_1.strict.deepEqual(await client.ft._list(), []);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
