"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SUGLEN_1 = require("./SUGLEN");
describe('SUGLEN', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, SUGLEN_1.transformArguments)('key'), ['FT.SUGLEN', 'key']);
    });
    test_utils_1.default.testWithClient('client.ft.sugLen', async (client) => {
        assert_1.strict.equal(await client.ft.sugLen('key'), 0);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
