"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const EXPLAINCLI_1 = require("./EXPLAINCLI");
describe('EXPLAINCLI', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, EXPLAINCLI_1.transformArguments)('index', '*'), ['FT.EXPLAINCLI', 'index', '*']);
    });
});
