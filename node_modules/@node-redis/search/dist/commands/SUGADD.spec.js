"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SUGADD_1 = require("./SUGADD");
describe('SUGADD', () => {
    describe('transformArguments', () => {
        it('without options', () => {
            assert_1.strict.deepEqual((0, SUGADD_1.transformArguments)('key', 'string', 1), ['FT.SUGADD', 'key', 'string', '1']);
        });
        it('with INCR', () => {
            assert_1.strict.deepEqual((0, SUGADD_1.transformArguments)('key', 'string', 1, { INCR: true }), ['FT.SUGADD', 'key', 'string', '1', 'INCR']);
        });
        it('with PAYLOAD', () => {
            assert_1.strict.deepEqual((0, SUGADD_1.transformArguments)('key', 'string', 1, { PAYLOAD: 'payload' }), ['FT.SUGADD', 'key', 'string', '1', 'PAYLOAD', 'payload']);
        });
    });
    test_utils_1.default.testWithClient('client.ft.sugAdd', async (client) => {
        assert_1.strict.equal(await client.ft.sugAdd('key', 'string', 1), 1);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
