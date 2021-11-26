"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const EXPLAIN_1 = require("./EXPLAIN");
describe('EXPLAIN', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, EXPLAIN_1.transformArguments)('index', '*'), ['FT.EXPLAIN', 'index', '*']);
    });
});
