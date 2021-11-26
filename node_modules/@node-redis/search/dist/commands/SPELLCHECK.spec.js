"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const CREATE_1 = require("./CREATE");
const SPELLCHECK_1 = require("./SPELLCHECK");
describe('SPELLCHECK', () => {
    describe('transformArguments', () => {
        it('without options', () => {
            assert_1.strict.deepEqual((0, SPELLCHECK_1.transformArguments)('index', 'query'), ['FT.SPELLCHECK', 'index', 'query']);
        });
        it('with DISTANCE', () => {
            assert_1.strict.deepEqual((0, SPELLCHECK_1.transformArguments)('index', 'query', { DISTANCE: 2 }), ['FT.SPELLCHECK', 'index', 'query', 'DISTANCE', '2']);
        });
        describe('with TERMS', () => {
            it('single', () => {
                assert_1.strict.deepEqual((0, SPELLCHECK_1.transformArguments)('index', 'query', {
                    TERMS: {
                        mode: 'INCLUDE',
                        dictionary: 'dictionary'
                    }
                }), ['FT.SPELLCHECK', 'index', 'query', 'TERMS', 'INCLUDE', 'dictionary']);
            });
            it('multiple', () => {
                assert_1.strict.deepEqual((0, SPELLCHECK_1.transformArguments)('index', 'query', {
                    TERMS: [{
                            mode: 'INCLUDE',
                            dictionary: 'include'
                        }, {
                            mode: 'EXCLUDE',
                            dictionary: 'exclude'
                        }]
                }), ['FT.SPELLCHECK', 'index', 'query', 'TERMS', 'INCLUDE', 'include', 'TERMS', 'EXCLUDE', 'exclude']);
            });
        });
    });
    test_utils_1.default.testWithClient('client.ft.spellCheck', async (client) => {
        await Promise.all([
            client.ft.create('index', {
                field: CREATE_1.SchemaFieldTypes.TEXT
            }),
            client.hSet('key', 'field', 'query')
        ]);
        assert_1.strict.deepEqual(await client.ft.spellCheck('index', 'quer'), [{
                term: 'quer',
                suggestions: [{
                        score: 1,
                        suggestion: 'query'
                    }]
            }]);
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
