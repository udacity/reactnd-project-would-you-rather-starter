"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const DICTADD_1 = require("./DICTADD");
describe('DICTADD', () => {
    describe('transformArguments', () => {
        it('string', () => {
            assert_1.strict.deepEqual((0, DICTADD_1.transformArguments)('dictionary', 'term'), ['FT.DICTADD', 'dictionary', 'term']);
        });
        it('Array', () => {
            assert_1.strict.deepEqual((0, DICTADD_1.transformArguments)('dictionary', ['1', '2']), ['FT.DICTADD', 'dictionary', '1', '2']);
        });
    });
    test_utils_1.default.testWithClient('client.ft.dictAdd', async (client) => {
        assert_1.strict.equal(await client.ft.dictAdd('dictionary', 'term'), 1);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
