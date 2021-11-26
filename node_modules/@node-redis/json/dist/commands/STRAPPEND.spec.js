"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const STRAPPEND_1 = require("./STRAPPEND");
describe('STRAPPEND', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, STRAPPEND_1.transformArguments)('key', 'append'), ['JSON.STRAPPEND', 'key', '"append"']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, STRAPPEND_1.transformArguments)('key', '$', 'append'), ['JSON.STRAPPEND', 'key', '$', '"append"']);
        });
    });
    test_utils_1.default.testWithClient('client.json.strAppend', async (client) => {
        await client.json.set('key', '$', '');
        assert_1.strict.deepEqual(await client.json.strAppend('key', '$', 'append'), [6]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
