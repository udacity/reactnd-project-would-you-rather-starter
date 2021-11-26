"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SUGDEL_1 = require("./SUGDEL");
describe('SUGDEL', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, SUGDEL_1.transformArguments)('key', 'string'), ['FT.SUGDEL', 'key', 'string']);
    });
    test_utils_1.default.testWithClient('client.ft.sugDel', async (client) => {
        assert_1.strict.equal(await client.ft.sugDel('key', 'string'), false);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
