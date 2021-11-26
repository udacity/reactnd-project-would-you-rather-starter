"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const ARRTRIM_1 = require("./ARRTRIM");
describe('ARRTRIM', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, ARRTRIM_1.transformArguments)('key', '$', 0, 1), ['JSON.ARRTRIM', 'key', '$', '0', '1']);
    });
    test_utils_1.default.testWithClient('client.json.arrTrim', async (client) => {
        await client.json.set('key', '$', []);
        assert_1.strict.deepEqual(await client.json.arrTrim('key', '$', 0, 1), [0]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
