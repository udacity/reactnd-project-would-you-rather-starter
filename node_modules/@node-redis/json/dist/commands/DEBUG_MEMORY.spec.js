"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const DEBUG_MEMORY_1 = require("./DEBUG_MEMORY");
describe('DEBUG MEMORY', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, DEBUG_MEMORY_1.transformArguments)('key'), ['JSON.DEBUG', 'MEMORY', 'key']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, DEBUG_MEMORY_1.transformArguments)('key', '$'), ['JSON.DEBUG', 'MEMORY', 'key', '$']);
        });
    });
    test_utils_1.default.testWithClient('client.json.arrTrim', async (client) => {
        assert_1.strict.deepEqual(await client.json.debugMemory('key', '$'), []);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
