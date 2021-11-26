"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const OBJKEYS_1 = require("./OBJKEYS");
describe('OBJKEYS', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, OBJKEYS_1.transformArguments)('key'), ['JSON.OBJKEYS', 'key']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, OBJKEYS_1.transformArguments)('key', '$'), ['JSON.OBJKEYS', 'key', '$']);
        });
    });
    // testUtils.testWithClient('client.json.objKeys', async client => {
    //     assert.deepEqual(
    //         await client.json.objKeys('key', '$'),
    //         [null]
    //     );
    // }, GLOBAL.SERVERS.OPEN);
});
