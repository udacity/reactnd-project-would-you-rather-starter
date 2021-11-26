"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const ARRINDEX_1 = require("./ARRINDEX");
describe('ARRINDEX', () => {
    describe('transformArguments', () => {
        it('simple', () => {
            assert_1.strict.deepEqual((0, ARRINDEX_1.transformArguments)('key', '$', 'json'), ['JSON.ARRINDEX', 'key', '$', '"json"']);
        });
        it('with start', () => {
            assert_1.strict.deepEqual((0, ARRINDEX_1.transformArguments)('key', '$', 'json', 1), ['JSON.ARRINDEX', 'key', '$', '"json"', '1']);
        });
        it('with start, end', () => {
            assert_1.strict.deepEqual((0, ARRINDEX_1.transformArguments)('key', '$', 'json', 1, 2), ['JSON.ARRINDEX', 'key', '$', '"json"', '1', '2']);
        });
    });
    test_utils_1.default.testWithClient('client.json.arrIndex', async (client) => {
        await client.json.set('key', '$', []);
        assert_1.strict.deepEqual(await client.json.arrIndex('key', '$', 'json'), [-1]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
