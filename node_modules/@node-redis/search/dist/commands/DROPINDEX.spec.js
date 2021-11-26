"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const CREATE_1 = require("./CREATE");
const DROPINDEX_1 = require("./DROPINDEX");
describe('DROPINDEX', () => {
    describe('transformArguments', () => {
        it('without options', () => {
            assert_1.strict.deepEqual((0, DROPINDEX_1.transformArguments)('index'), ['FT.DROPINDEX', 'index']);
        });
        it('with DD', () => {
            assert_1.strict.deepEqual((0, DROPINDEX_1.transformArguments)('index', { DD: true }), ['FT.DROPINDEX', 'index', 'DD']);
        });
    });
    test_utils_1.default.testWithClient('client.ft.dropIndex', async (client) => {
        await client.ft.create('index', {
            field: CREATE_1.SchemaFieldTypes.TEXT // TODO: shouldn't be mandatory
        });
        assert_1.strict.equal(await client.ft.dropIndex('index'), 'OK');
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
