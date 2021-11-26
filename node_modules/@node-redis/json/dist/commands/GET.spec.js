"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const GET_1 = require("./GET");
describe('GET', () => {
    describe('transformArguments', () => {
        describe('path', () => {
            it('string', () => {
                assert_1.strict.deepEqual((0, GET_1.transformArguments)('key', { path: '$' }), ['JSON.GET', 'key', '$']);
            });
            it('array', () => {
                assert_1.strict.deepEqual((0, GET_1.transformArguments)('key', { path: ['$.1', '$.2'] }), ['JSON.GET', 'key', '$.1', '$.2']);
            });
        });
        it('key', () => {
            assert_1.strict.deepEqual((0, GET_1.transformArguments)('key'), ['JSON.GET', 'key']);
        });
        it('INDENT', () => {
            assert_1.strict.deepEqual((0, GET_1.transformArguments)('key', { INDENT: 'indent' }), ['JSON.GET', 'key', 'INDENT', 'indent']);
        });
        it('NEWLINE', () => {
            assert_1.strict.deepEqual((0, GET_1.transformArguments)('key', { NEWLINE: 'newline' }), ['JSON.GET', 'key', 'NEWLINE', 'newline']);
        });
        it('SPACE', () => {
            assert_1.strict.deepEqual((0, GET_1.transformArguments)('key', { SPACE: 'space' }), ['JSON.GET', 'key', 'SPACE', 'space']);
        });
        it('NOESCAPE', () => {
            assert_1.strict.deepEqual((0, GET_1.transformArguments)('key', { NOESCAPE: true }), ['JSON.GET', 'key', 'NOESCAPE']);
        });
        it('INDENT, NEWLINE, SPACE, NOESCAPE, path', () => {
            assert_1.strict.deepEqual((0, GET_1.transformArguments)('key', {
                path: '$.path',
                INDENT: 'indent',
                NEWLINE: 'newline',
                SPACE: 'space',
                NOESCAPE: true
            }), ['JSON.GET', 'key', '$.path', 'INDENT', 'indent', 'NEWLINE', 'newline', 'SPACE', 'space', 'NOESCAPE']);
        });
    });
    test_utils_1.default.testWithClient('client.json.get', async (client) => {
        assert_1.strict.equal(await client.json.get('key'), null);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
