"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const DICTDEL_1 = require("./DICTDEL");
describe('DICTDEL', () => {
    describe('transformArguments', () => {
        it('string', () => {
            assert_1.strict.deepEqual((0, DICTDEL_1.transformArguments)('dictionary', 'term'), ['FT.DICTDEL', 'dictionary', 'term']);
        });
        it('Array', () => {
            assert_1.strict.deepEqual((0, DICTDEL_1.transformArguments)('dictionary', ['1', '2']), ['FT.DICTDEL', 'dictionary', '1', '2']);
        });
    });
    test_utils_1.default.testWithClient('client.ft.dictDel', async (client) => {
        assert_1.strict.equal(await client.ft.dictDel('dictionary', 'term'), 0);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
