"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const SYNDUMP_1 = require("./SYNDUMP");
describe('SYNDUMP', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, SYNDUMP_1.transformArguments)('index'), ['FT.SYNDUMP', 'index']);
    });
    test_utils_1.default.testWithClient('client.ft.synDump', async (client) => {
        await client.ft.create('index', {}, {
            ON: 'HASH' // TODO: shouldn't be mandatory
        });
        assert_1.strict.deepEqual(await client.ft.synDump('index'), []);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
