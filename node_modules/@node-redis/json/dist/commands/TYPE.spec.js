"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const TYPE_1 = require("./TYPE");
describe('TYPE', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, TYPE_1.transformArguments)('key'), ['JSON.TYPE', 'key']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, TYPE_1.transformArguments)('key', '$'), ['JSON.TYPE', 'key', '$']);
        });
    });
    // testUtils.testWithClient('client.json.type', async client => {
    //     assert.deepEqual(
    //         await client.json.type('key', '$'),
    //         [null]
    //     );
    // }, GLOBAL.SERVERS.OPEN);
});
