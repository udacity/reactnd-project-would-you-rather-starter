"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const ALIASUPDATE_1 = require("./ALIASUPDATE");
describe('ALIASUPDATE', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, ALIASUPDATE_1.transformArguments)('alias', 'index'), ['FT.ALIASUPDATE', 'alias', 'index']);
    });
});
