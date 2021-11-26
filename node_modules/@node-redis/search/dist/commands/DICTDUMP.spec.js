"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const DICTDUMP_1 = require("./DICTDUMP");
describe('DICTDUMP', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, DICTDUMP_1.transformArguments)('dictionary'), ['FT.DICTDUMP', 'dictionary']);
    });
    test_utils_1.default.testWithClient('client.ft.dictDump', async (client) => {
        await client.ft.dictAdd('dictionary', 'string');
        assert_1.strict.deepEqual(await client.ft.dictDump('dictionary'), ['string']);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
