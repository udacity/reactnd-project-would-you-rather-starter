"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const CONFIG_SET_1 = require("./CONFIG_SET");
describe('CONFIG SET', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, CONFIG_SET_1.transformArguments)('TIMEOUT', '500'), ['FT.CONFIG', 'SET', 'TIMEOUT', '500']);
    });
});
