"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const CREATE_1 = require("./CREATE");
const TAGVALS_1 = require("./TAGVALS");
describe('TAGVALS', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, TAGVALS_1.transformArguments)('index', '@field'), ['FT.TAGVALS', 'index', '@field']);
    });
    test_utils_1.default.testWithClient('client.ft.tagVals', async (client) => {
        await client.ft.create('index', {
            field: CREATE_1.SchemaFieldTypes.TAG
        });
        assert_1.strict.deepEqual(await client.ft.tagVals('index', 'field'), []);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
