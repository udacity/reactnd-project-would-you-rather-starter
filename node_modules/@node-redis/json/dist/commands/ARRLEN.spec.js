"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const ARRLEN_1 = require("./ARRLEN");
describe('ARRLEN', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, ARRLEN_1.transformArguments)('key'), ['JSON.ARRLEN', 'key']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, ARRLEN_1.transformArguments)('key', '$'), ['JSON.ARRLEN', 'key', '$']);
        });
    });
    test_utils_1.default.testWithClient('client.json.arrLen', async (client) => {
        await client.json.set('key', '$', []);
        assert_1.strict.deepEqual(await client.json.arrLen('key', '$'), [0]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
