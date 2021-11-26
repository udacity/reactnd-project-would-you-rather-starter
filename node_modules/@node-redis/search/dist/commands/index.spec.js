"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const _1 = require(".");
describe('pushSortByArguments', () => {
    describe('single', () => {
        it('string', () => {
            assert_1.strict.deepEqual((0, _1.pushSortByArguments)([], 'SORTBT', '@property'), ['SORTBT', '1', '@property']);
        });
        it('.BY', () => {
            assert_1.strict.deepEqual((0, _1.pushSortByArguments)([], 'SORTBT', { BY: '@property' }), ['SORTBT', '1', '@property']);
        });
        it('with DIRECTION', () => {
            assert_1.strict.deepEqual((0, _1.pushSortByArguments)([], 'SORTBY', {
                BY: '@property',
                DIRECTION: 'ASC'
            }), ['SORTBY', '2', '@property', 'ASC']);
        });
    });
    it('multiple', () => {
        assert_1.strict.deepEqual((0, _1.pushSortByArguments)([], 'SORTBY', ['@1', '@2']), ['SORTBY', '2', '@1', '@2']);
    });
});
it('pushArgumentsWithLength', () => {
    assert_1.strict.deepEqual((0, _1.pushArgumentsWithLength)(['a'], args => {
        args.push('b', 'c');
    }), ['a', '2', 'b', 'c']);
});
