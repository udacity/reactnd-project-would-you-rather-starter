"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const ARRPOP_1 = require("./ARRPOP");
describe('ARRPOP', () => {
    describe('transformArguments', () => {
        it('key', () => {
            assert_1.strict.deepEqual((0, ARRPOP_1.transformArguments)('key'), ['JSON.ARRPOP', 'key']);
        });
        it('key, path', () => {
            assert_1.strict.deepEqual((0, ARRPOP_1.transformArguments)('key', '$'), ['JSON.ARRPOP', 'key', '$']);
        });
        it('key, path, index', () => {
            assert_1.strict.deepEqual((0, ARRPOP_1.transformArguments)('key', '$', 0), ['JSON.ARRPOP', 'key', '$', '0']);
        });
    });
    test_utils_1.default.testWithClient('client.json.arrPop', async (client) => {
        await client.json.set('key', '$', []);
        assert_1.strict.deepEqual(await client.json.arrPop('key', '$'), [null]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
