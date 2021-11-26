"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const NUMMULTBY_1 = require("./NUMMULTBY");
describe('NUMMULTBY', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, NUMMULTBY_1.transformArguments)('key', '$', 2), ['JSON.NUMMULTBY', 'key', '$', '2']);
    });
    test_utils_1.default.testWithClient('client.json.numMultBy', async (client) => {
        await client.json.set('key', '$', 1);
        assert_1.strict.deepEqual(await client.json.numMultBy('key', '$', 2), [2]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
