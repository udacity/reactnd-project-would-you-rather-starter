"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const CREATE_1 = require("./CREATE");
const _1 = require(".");
describe('CREATE', () => {
    describe('transformArguments', () => {
        it('simple', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}), ['FT.CREATE', 'index', 'SCHEMA']);
        });
        describe('with fields', () => {
            describe('TEXT', () => {
                it('without options', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: CREATE_1.SchemaFieldTypes.TEXT
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TEXT']);
                });
                it('with NOSTEM', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: {
                            type: CREATE_1.SchemaFieldTypes.TEXT,
                            NOSTEM: true
                        }
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TEXT', 'NOSTEM']);
                });
                it('with WEIGHT', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: {
                            type: CREATE_1.SchemaFieldTypes.TEXT,
                            WEIGHT: 1
                        }
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TEXT', 'WEIGHT', '1']);
                });
                it('with PHONETIC', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: {
                            type: CREATE_1.SchemaFieldTypes.TEXT,
                            PHONETIC: CREATE_1.SchemaTextFieldPhonetics.DM_EN
                        }
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TEXT', 'PHONETIC', CREATE_1.SchemaTextFieldPhonetics.DM_EN]);
                });
            });
            it('NUMERIC', () => {
                assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                    field: CREATE_1.SchemaFieldTypes.NUMERIC
                }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'NUMERIC']);
            });
            it('GEO', () => {
                assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                    field: CREATE_1.SchemaFieldTypes.GEO
                }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'GEO']);
            });
            describe('TAG', () => {
                describe('without options', () => {
                    it('SchemaFieldTypes.TAG', () => {
                        assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                            field: CREATE_1.SchemaFieldTypes.TAG
                        }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TAG']);
                    });
                    it('{ type: SchemaFieldTypes.TAG }', () => {
                        assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                            field: {
                                type: CREATE_1.SchemaFieldTypes.TAG
                            }
                        }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TAG']);
                    });
                });
                it('with SEPERATOR', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: {
                            type: CREATE_1.SchemaFieldTypes.TAG,
                            SEPERATOR: 'seperator'
                        }
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TAG', 'SEPERATOR', 'seperator']);
                });
                it('with CASESENSITIVE', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: {
                            type: CREATE_1.SchemaFieldTypes.TAG,
                            CASESENSITIVE: true
                        }
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TAG', 'CASESENSITIVE']);
                });
            });
            describe('with generic options', () => {
                it('with AS', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: {
                            type: CREATE_1.SchemaFieldTypes.TEXT,
                            AS: 'as'
                        }
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'AS', 'as', 'TEXT']);
                });
                describe('with SORTABLE', () => {
                    it('true', () => {
                        assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                            field: {
                                type: CREATE_1.SchemaFieldTypes.TEXT,
                                SORTABLE: true
                            }
                        }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TEXT', 'SORTABLE']);
                    });
                    it('UNF', () => {
                        assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                            field: {
                                type: CREATE_1.SchemaFieldTypes.TEXT,
                                SORTABLE: 'UNF'
                            }
                        }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TEXT', 'SORTABLE', 'UNF']);
                    });
                });
                it('with NOINDEX', () => {
                    assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {
                        field: {
                            type: CREATE_1.SchemaFieldTypes.TEXT,
                            NOINDEX: true
                        }
                    }), ['FT.CREATE', 'index', 'SCHEMA', 'field', 'TEXT', 'NOINDEX']);
                });
            });
        });
        it('with ON', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                ON: 'HASH'
            }), ['FT.CREATE', 'index', 'ON', 'HASH', 'SCHEMA']);
        });
        describe('with PREFIX', () => {
            it('string', () => {
                assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                    PREFIX: 'prefix'
                }), ['FT.CREATE', 'index', 'PREFIX', '1', 'prefix', 'SCHEMA']);
            });
            it('Array', () => {
                assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                    PREFIX: ['1', '2']
                }), ['FT.CREATE', 'index', 'PREFIX', '2', '1', '2', 'SCHEMA']);
            });
        });
        it('with FILTER', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                FILTER: '@field != ""'
            }), ['FT.CREATE', 'index', 'FILTER', '@field != ""', 'SCHEMA']);
        });
        it('with LANGUAGE', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                LANGUAGE: _1.RedisSearchLanguages.ARABIC
            }), ['FT.CREATE', 'index', 'LANGUAGE', _1.RedisSearchLanguages.ARABIC, 'SCHEMA']);
        });
        it('with LANGUAGE_FIELD', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                LANGUAGE_FIELD: '@field'
            }), ['FT.CREATE', 'index', 'LANGUAGE_FIELD', '@field', 'SCHEMA']);
        });
        it('with SCORE', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                SCORE: 1
            }), ['FT.CREATE', 'index', 'SCORE', '1', 'SCHEMA']);
        });
        it('with SCORE_FIELD', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                SCORE_FIELD: '@field'
            }), ['FT.CREATE', 'index', 'SCORE_FIELD', '@field', 'SCHEMA']);
        });
        it('with MAXTEXTFIELDS', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                MAXTEXTFIELDS: true
            }), ['FT.CREATE', 'index', 'MAXTEXTFIELDS', 'SCHEMA']);
        });
        it('with TEMPORARY', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                TEMPORARY: 1
            }), ['FT.CREATE', 'index', 'TEMPORARY', '1', 'SCHEMA']);
        });
        it('with NOOFFSETS', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                NOOFFSETS: true
            }), ['FT.CREATE', 'index', 'NOOFFSETS', 'SCHEMA']);
        });
        it('with NOHL', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                NOHL: true
            }), ['FT.CREATE', 'index', 'NOHL', 'SCHEMA']);
        });
        it('with NOFIELDS', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                NOFIELDS: true
            }), ['FT.CREATE', 'index', 'NOFIELDS', 'SCHEMA']);
        });
        it('with NOFREQS', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                NOFREQS: true
            }), ['FT.CREATE', 'index', 'NOFREQS', 'SCHEMA']);
        });
        it('with SKIPINITIALSCAN', () => {
            assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                SKIPINITIALSCAN: true
            }), ['FT.CREATE', 'index', 'SKIPINITIALSCAN', 'SCHEMA']);
        });
        describe('with STOPWORDS', () => {
            it('string', () => {
                assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                    STOPWORDS: 'stopword'
                }), ['FT.CREATE', 'index', 'STOPWORDS', '1', 'stopword', 'SCHEMA']);
            });
            it('Array', () => {
                assert_1.strict.deepEqual((0, CREATE_1.transformArguments)('index', {}, {
                    STOPWORDS: ['1', '2']
                }), ['FT.CREATE', 'index', 'STOPWORDS', '2', '1', '2', 'SCHEMA']);
            });
        });
    });
    test_utils_1.default.testWithClient('client.ft.create', async (client) => {
        assert_1.strict.equal(await client.ft.create('index', {
            field: CREATE_1.SchemaFieldTypes.TEXT // TODO: shouldn't be mandatory
        }), 'OK');
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
