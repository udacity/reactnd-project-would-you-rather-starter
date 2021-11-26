"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SYNUPDATE_1 = require("./SYNUPDATE");
describe('SYNUPDATE', () => {
    describe('transformArguments', () => {
        it('single term', () => {
            assert_1.strict.deepEqual((0, SYNUPDATE_1.transformArguments)('index', 'groupId', 'term'), ['FT.SYNUPDATE', 'index', 'groupId', 'term']);
        });
        it('multiple terms', () => {
            assert_1.strict.deepEqual((0, SYNUPDATE_1.transformArguments)('index', 'groupId', ['1', '2']), ['FT.SYNUPDATE', 'index', 'groupId', '1', '2']);
        });
        it('with SKIPINITIALSCAN', () => {
            assert_1.strict.deepEqual((0, SYNUPDATE_1.transformArguments)('index', 'groupId', 'term', { SKIPINITIALSCAN: true }), ['FT.SYNUPDATE', 'index', 'groupId', 'SKIPINITIALSCAN', 'term']);
        });
    });
    test_utils_1.default.testWithClient('client.ft.synUpdate', async (client) => {
        await client.ft.create('index', {}, {
            ON: 'HASH' // TODO: shouldn't be mandatory
        });
        assert_1.strict.equal(await client.ft.synUpdate('index', 'groupId', 'term'), 'OK');
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
