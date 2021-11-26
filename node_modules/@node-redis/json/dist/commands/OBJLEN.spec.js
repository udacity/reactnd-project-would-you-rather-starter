"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const OBJLEN_1 = require("./OBJLEN");
describe('OBJLEN', () => {
    describe('transformArguments', () => {
        it('without path', () => {
            assert_1.strict.deepEqual((0, OBJLEN_1.transformArguments)('key'), ['JSON.OBJLEN', 'key']);
        });
        it('with path', () => {
            assert_1.strict.deepEqual((0, OBJLEN_1.transformArguments)('key', '$'), ['JSON.OBJLEN', 'key', '$']);
        });
    });
    // testUtils.testWithClient('client.json.objLen', async client => {
    //     assert.equal(
    //         await client.json.objLen('key', '$'),
    //         [null]
    //     );
    // }, GLOBAL.SERVERS.OPEN);
});
