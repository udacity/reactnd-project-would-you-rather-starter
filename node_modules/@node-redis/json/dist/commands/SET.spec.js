"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SET_1 = require("./SET");
describe('SET', () => {
    describe('transformArguments', () => {
        it('transformArguments', () => {
            assert_1.strict.deepEqual((0, SET_1.transformArguments)('key', '$', 'json'), ['JSON.SET', 'key', '$', '"json"']);
        });
        it('NX', () => {
            assert_1.strict.deepEqual((0, SET_1.transformArguments)('key', '$', 'json', { NX: true }), ['JSON.SET', 'key', '$', '"json"', 'NX']);
        });
        it('XX', () => {
            assert_1.strict.deepEqual((0, SET_1.transformArguments)('key', '$', 'json', { XX: true }), ['JSON.SET', 'key', '$', '"json"', 'XX']);
        });
    });
    test_utils_1.default.testWithClient('client.json.mGet', async (client) => {
        assert_1.strict.equal(await client.json.set('key', '$', 'json'), 'OK');
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
