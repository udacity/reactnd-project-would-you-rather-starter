"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const _1 = require(".");
const test_utils_1 = require("../test-utils");
const CREATE_1 = require("./CREATE");
const SEARCH_1 = require("./SEARCH");
describe('SEARCH', () => {
    describe('transformArguments', () => {
        it('without options', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query'), ['FT.SEARCH', 'index', 'query']);
        });
        it('with VERBATIM', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { VERBATIM: true }), ['FT.SEARCH', 'index', 'query', 'VERBATIM']);
        });
        it('with NOSTOPWORDS', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { NOSTOPWORDS: true }), ['FT.SEARCH', 'index', 'query', 'NOSTOPWORDS']);
        });
        it('with INKEYS', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { INKEYS: 'key' }), ['FT.SEARCH', 'index', 'query', 'INKEYS', '1', 'key']);
        });
        it('with INFIELDS', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { INFIELDS: 'field' }), ['FT.SEARCH', 'index', 'query', 'INFIELDS', '1', 'field']);
        });
        it('with RETURN', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { RETURN: 'return' }), ['FT.SEARCH', 'index', 'query', 'RETURN', '1', 'return']);
        });
        describe('with SUMMARIZE', () => {
            it('true', () => {
                assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { SUMMARIZE: true }), ['FT.SEARCH', 'index', 'query', 'SUMMARIZE']);
            });
            describe('with FIELDS', () => {
                it('string', () => {
                    assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                        SUMMARIZE: {
                            FIELDS: ['@field']
                        }
                    }), ['FT.SEARCH', 'index', 'query', 'SUMMARIZE', 'FIELDS', '1', '@field']);
                });
                it('Array', () => {
                    assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                        SUMMARIZE: {
                            FIELDS: ['@1', '@2']
                        }
                    }), ['FT.SEARCH', 'index', 'query', 'SUMMARIZE', 'FIELDS', '2', '@1', '@2']);
                });
            });
            it('with FRAGS', () => {
                assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                    SUMMARIZE: {
                        FRAGS: 1
                    }
                }), ['FT.SEARCH', 'index', 'query', 'SUMMARIZE', 'FRAGS', '1']);
            });
            it('with LEN', () => {
                assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                    SUMMARIZE: {
                        LEN: 1
                    }
                }), ['FT.SEARCH', 'index', 'query', 'SUMMARIZE', 'LEN', '1']);
            });
            it('with SEPARATOR', () => {
                assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                    SUMMARIZE: {
                        SEPARATOR: 'separator'
                    }
                }), ['FT.SEARCH', 'index', 'query', 'SUMMARIZE', 'SEPARATOR', 'separator']);
            });
        });
        describe('with HIGHLIGHT', () => {
            it('true', () => {
                assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { HIGHLIGHT: true }), ['FT.SEARCH', 'index', 'query', 'HIGHLIGHT']);
            });
            describe('with FIELDS', () => {
                it('string', () => {
                    assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                        HIGHLIGHT: {
                            FIELDS: ['@field']
                        }
                    }), ['FT.SEARCH', 'index', 'query', 'HIGHLIGHT', 'FIELDS', '1', '@field']);
                });
                it('Array', () => {
                    assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                        HIGHLIGHT: {
                            FIELDS: ['@1', '@2']
                        }
                    }), ['FT.SEARCH', 'index', 'query', 'HIGHLIGHT', 'FIELDS', '2', '@1', '@2']);
                });
            });
            it('with TAGS', () => {
                assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                    HIGHLIGHT: {
                        TAGS: {
                            open: 'open',
                            close: 'close'
                        }
                    }
                }), ['FT.SEARCH', 'index', 'query', 'HIGHLIGHT', 'TAGS', 'open', 'close']);
            });
        });
        it('with SLOP', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { SLOP: 1 }), ['FT.SEARCH', 'index', 'query', 'SLOP', '1']);
        });
        it('with INORDER', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { INORDER: true }), ['FT.SEARCH', 'index', 'query', 'INORDER']);
        });
        it('with LANGUAGE', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { LANGUAGE: _1.RedisSearchLanguages.ARABIC }), ['FT.SEARCH', 'index', 'query', 'LANGUAGE', _1.RedisSearchLanguages.ARABIC]);
        });
        it('with EXPANDER', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { EXPANDER: 'expender' }), ['FT.SEARCH', 'index', 'query', 'EXPANDER', 'expender']);
        });
        it('with SCORER', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { SCORER: 'scorer' }), ['FT.SEARCH', 'index', 'query', 'SCORER', 'scorer']);
        });
        it('with MSORTBY', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', { MSORTBY: '@by' }), ['FT.SEARCH', 'index', 'query', 'MSORTBY', '1', '@by']);
        });
        it('with LIMIT', () => {
            assert_1.strict.deepEqual((0, SEARCH_1.transformArguments)('index', 'query', {
                LIMIT: {
                    from: 0,
                    size: 1
                }
            }), ['FT.SEARCH', 'index', 'query', 'LIMIT', '0', '1']);
        });
    });
    test_utils_1.default.testWithClient('client.ft.search', async (client) => {
        await Promise.all([
            client.ft.create('index', {
                field: CREATE_1.SchemaFieldTypes.NUMERIC
            }),
            client.hSet('1', 'field', '1')
        ]);
        assert_1.strict.deepEqual(await client.ft.search('index', '*'), {
            total: 1,
            documents: [{
                    id: '1',
                    value: Object.create(null, {
                        field: {
                            value: '1',
                            configurable: true,
                            enumerable: true
                        }
                    })
                }]
        });
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
