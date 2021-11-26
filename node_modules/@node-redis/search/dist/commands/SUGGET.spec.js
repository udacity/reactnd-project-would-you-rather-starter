"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SUGGET_1 = require("./SUGGET");
describe('SUGGET', () => {
    describe('transformArguments', () => {
        it('without options', () => {
            assert_1.strict.deepEqual((0, SUGGET_1.transformArguments)('key', 'prefix'), ['FT.SUGGET', 'key', 'prefix']);
        });
        it('with FUZZY', () => {
            assert_1.strict.deepEqual((0, SUGGET_1.transformArguments)('key', 'prefix', { FUZZY: true }), ['FT.SUGGET', 'key', 'prefix', 'FUZZY']);
        });
        it('with MAX', () => {
            assert_1.strict.deepEqual((0, SUGGET_1.transformArguments)('key', 'prefix', { MAX: 10 }), ['FT.SUGGET', 'key', 'prefix', 'MAX', '10']);
        });
    });
    describe('client.ft.sugGet', () => {
        test_utils_1.default.testWithClient('null', async (client) => {
            assert_1.strict.equal(await client.ft.sugGet('key', 'prefix'), null);
        }, test_utils_1.GLOBAL.SERVERS.OPEN);
        test_utils_1.default.testWithClient('with suggestions', async (client) => {
            await client.ft.sugAdd('key', 'string', 1);
            assert_1.strict.deepEqual(await client.ft.sugGet('key', 'string'), ['string']);
        }, test_utils_1.GLOBAL.SERVERS.OPEN);
    });
});
