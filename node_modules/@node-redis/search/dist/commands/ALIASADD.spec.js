"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const ALIASADD_1 = require("./ALIASADD");
describe('ALIASADD', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, ALIASADD_1.transformArguments)('alias', 'index'), ['FT.ALIASADD', 'alias', 'index']);
    });
});
