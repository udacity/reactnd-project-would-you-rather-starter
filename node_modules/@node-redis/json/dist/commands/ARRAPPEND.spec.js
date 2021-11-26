"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const ARRAPPEND_1 = require("./ARRAPPEND");
describe('ARRAPPEND', () => {
    describe('transformArguments', () => {
        it('single JSON', () => {
            assert_1.strict.deepEqual((0, ARRAPPEND_1.transformArguments)('key', '$', 1), ['JSON.ARRAPPEND', 'key', '$', '1']);
        });
        it('multiple JSONs', () => {
            assert_1.strict.deepEqual((0, ARRAPPEND_1.transformArguments)('key', '$', 1, 2), ['JSON.ARRAPPEND', 'key', '$', '1', '2']);
        });
    });
    test_utils_1.default.testWithClient('client.json.arrAppend', async (client) => {
        await client.json.set('key', '$', []);
        assert_1.strict.deepEqual(await client.json.arrAppend('key', '$', 1), [1]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
