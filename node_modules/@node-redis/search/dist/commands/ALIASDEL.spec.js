"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const ALIASDEL_1 = require("./ALIASDEL");
describe('ALIASDEL', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, ALIASDEL_1.transformArguments)('alias', 'index'), ['FT.ALIASDEL', 'alias', 'index']);
    });
});
