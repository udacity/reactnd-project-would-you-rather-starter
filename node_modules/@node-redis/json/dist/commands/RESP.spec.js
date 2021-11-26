"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const RESP_1 = require("./RESP");
describe('RESP', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, RESP_1.transformArguments)('key'), ['JSON.RESP', 'key']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, RESP_1.transformArguments)('key', '$'), ['JSON.RESP', 'key', '$']);
        });
    });
    // testUtils.testWithClient('client.json.resp', async client => {
    //     assert.deepEqual(
    //     await client.json.resp('key', '$'),
    //         [null]
    //     );
    // }, GLOBAL.SERVERS.OPEN);
});
