"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const STRLEN_1 = require("./STRLEN");
describe('STRLEN', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, STRLEN_1.transformArguments)('key'), ['JSON.STRLEN', 'key']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, STRLEN_1.transformArguments)('key', '$'), ['JSON.STRLEN', 'key', '$']);
        });
    });
    test_utils_1.default.testWithClient('client.json.strLen', async (client) => {
        await client.json.set('key', '$', '');
        assert_1.strict.deepEqual(await client.json.strLen('key', '$'), [0]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
