"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SUGGET_WITHSCORES_1 = require("./SUGGET_WITHSCORES");
describe('SUGGET WITHSCORES', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, SUGGET_WITHSCORES_1.transformArguments)('key', 'prefix'), ['FT.SUGGET', 'key', 'prefix', 'WITHSCORES']);
    });
    describe('client.ft.sugGetWithScores', () => {
        test_utils_1.default.testWithClient('null', async (client) => {
            assert_1.strict.equal(await client.ft.sugGetWithScores('key', 'prefix'), null);
        }, test_utils_1.GLOBAL.SERVERS.OPEN);
        test_utils_1.default.testWithClient('with suggestions', async (client) => {
            await client.ft.sugAdd('key', 'string', 1);
            assert_1.strict.deepEqual(await client.ft.sugGetWithScores('key', 'string'), [{
                    suggestion: 'string',
                    score: 2147483648
                }]);
        }, test_utils_1.GLOBAL.SERVERS.OPEN);
    });
});
