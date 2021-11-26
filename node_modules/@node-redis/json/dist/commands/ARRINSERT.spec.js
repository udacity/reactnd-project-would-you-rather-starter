"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const ARRINSERT_1 = require("./ARRINSERT");
describe('ARRINSERT', () => {
    describe('transformArguments', () => {
        it('single JSON', () => {
            assert_1.strict.deepEqual((0, ARRINSERT_1.transformArguments)('key', '$', 0, 'json'), ['JSON.ARRINSERT', 'key', '$', '0', '"json"']);
        });
        it('multiple JSONs', () => {
            assert_1.strict.deepEqual((0, ARRINSERT_1.transformArguments)('key', '$', 0, '1', '2'), ['JSON.ARRINSERT', 'key', '$', '0', '"1"', '"2"']);
        });
    });
    test_utils_1.default.testWithClient('client.json.arrInsert', async (client) => {
        await client.json.set('key', '$', []);
        assert_1.strict.deepEqual(await client.json.arrInsert('key', '$', 0, 'json'), [1]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
