"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const AGGREGATE_1 = require("./AGGREGATE");
const CREATE_1 = require("./CREATE");
describe('AGGREGATE', () => {
    describe('transformArguments', () => {
        it('without options', () => {
            assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*'), ['FT.AGGREGATE', 'index', '*']);
        });
        it('with VERBATIM', () => {
            assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', { VERBATIM: true }), ['FT.AGGREGATE', 'index', '*', 'VERBATIM']);
        });
        describe('with LOAD', () => {
            describe('single', () => {
                describe('without alias', () => {
                    it('string', () => {
                        assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', { LOAD: '@property' }), ['FT.AGGREGATE', 'index', '*', 'LOAD', '1', '@property']);
                    });
                    it('{ identifier: string }', () => {
                        assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                            LOAD: {
                                identifier: '@property'
                            }
                        }), ['FT.AGGREGATE', 'index', '*', 'LOAD', '1', '@property']);
                    });
                });
                it('with alias', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        LOAD: {
                            identifier: '@property',
                            AS: 'alias'
                        }
                    }), ['FT.AGGREGATE', 'index', '*', 'LOAD', '3', '@property', 'AS', 'alias']);
                });
            });
            it('multiple', () => {
                assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', { LOAD: ['@1', '@2'] }), ['FT.AGGREGATE', 'index', '*', 'LOAD', '2', '@1', '@2']);
            });
        });
        describe('with STEPS', () => {
            describe('GROUPBY', () => {
                describe('COUNT', () => {
                    describe('without properties', () => {
                        it('without alias', () => {
                            assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                                STEPS: [{
                                        type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                        REDUCE: {
                                            type: AGGREGATE_1.AggregateGroupByReducers.COUNT
                                        }
                                    }]
                            }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'COUNT', '0']);
                        });
                        it('with alias', () => {
                            assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                                STEPS: [{
                                        type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                        REDUCE: {
                                            type: AGGREGATE_1.AggregateGroupByReducers.COUNT,
                                            AS: 'count'
                                        }
                                    }]
                            }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'COUNT', '0', 'AS', 'count']);
                        });
                    });
                    describe('with properties', () => {
                        it('single', () => {
                            assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                                STEPS: [{
                                        type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                        properties: '@property',
                                        REDUCE: {
                                            type: AGGREGATE_1.AggregateGroupByReducers.COUNT
                                        }
                                    }]
                            }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '1', '@property', 'REDUCE', 'COUNT', '0']);
                        });
                        it('multiple', () => {
                            assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                                STEPS: [{
                                        type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                        properties: ['@1', '@2'],
                                        REDUCE: {
                                            type: AGGREGATE_1.AggregateGroupByReducers.COUNT
                                        }
                                    }]
                            }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '2', '@1', '@2', 'REDUCE', 'COUNT', '0']);
                        });
                    });
                });
                it('COUNT_DISTINCT', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.COUNT_DISTINCT,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'COUNT_DISTINCT', '1', '@property']);
                });
                it('COUNT_DISTINCTISH', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.COUNT_DISTINCTISH,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'COUNT_DISTINCTISH', '1', '@property']);
                });
                it('SUM', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.SUM,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'SUM', '1', '@property']);
                });
                it('MIN', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.MIN,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'MIN', '1', '@property']);
                });
                it('MAX', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.MAX,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'MAX', '1', '@property']);
                });
                it('AVG', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.AVG,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'AVG', '1', '@property']);
                });
                it('STDDEV', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.STDDEV,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'STDDEV', '1', '@property']);
                });
                it('QUANTILE', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.QUANTILE,
                                    property: '@property',
                                    quantile: 0.5
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'QUANTILE', '2', '@property', '0.5']);
                });
                it('TO_LIST', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.TO_LIST,
                                    property: '@property'
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'TOLIST', '1', '@property']);
                });
                describe('FIRST_VALUE', () => {
                    it('simple', () => {
                        assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                            STEPS: [{
                                    type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                    REDUCE: {
                                        type: AGGREGATE_1.AggregateGroupByReducers.FIRST_VALUE,
                                        property: '@property'
                                    }
                                }]
                        }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'FIRST_VALUE', '1', '@property']);
                    });
                    describe('with BY', () => {
                        describe('without direction', () => {
                            it('string', () => {
                                assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                                    STEPS: [{
                                            type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                            REDUCE: {
                                                type: AGGREGATE_1.AggregateGroupByReducers.FIRST_VALUE,
                                                property: '@property',
                                                BY: '@by'
                                            }
                                        }]
                                }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'FIRST_VALUE', '3', '@property', 'BY', '@by']);
                            });
                            it('{ property: string }', () => {
                                assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                                    STEPS: [{
                                            type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                            REDUCE: {
                                                type: AGGREGATE_1.AggregateGroupByReducers.FIRST_VALUE,
                                                property: '@property',
                                                BY: {
                                                    property: '@by'
                                                }
                                            }
                                        }]
                                }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'FIRST_VALUE', '3', '@property', 'BY', '@by']);
                            });
                        });
                        it('with direction', () => {
                            assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                                STEPS: [{
                                        type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                        REDUCE: {
                                            type: AGGREGATE_1.AggregateGroupByReducers.FIRST_VALUE,
                                            property: '@property',
                                            BY: {
                                                property: '@by',
                                                direction: 'ASC'
                                            }
                                        }
                                    }]
                            }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'FIRST_VALUE', '4', '@property', 'BY', '@by', 'ASC']);
                        });
                    });
                });
                it('RANDOM_SAMPLE', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.GROUPBY,
                                REDUCE: {
                                    type: AGGREGATE_1.AggregateGroupByReducers.RANDOM_SAMPLE,
                                    property: '@property',
                                    sampleSize: 1
                                }
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'GROUPBY', '0', 'REDUCE', 'RANDOM_SAMPLE', '2', '@property', '1']);
                });
            });
            describe('SORTBY', () => {
                it('string', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.SORTBY,
                                BY: '@by'
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'SORTBY', '1', '@by']);
                });
                it('Array', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.SORTBY,
                                BY: ['@1', '@2']
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'SORTBY', '2', '@1', '@2']);
                });
                it('with MAX', () => {
                    assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                        STEPS: [{
                                type: AGGREGATE_1.AggregateSteps.SORTBY,
                                BY: '@by',
                                MAX: 1
                            }]
                    }), ['FT.AGGREGATE', 'index', '*', 'SORTBY', '1', '@by', 'MAX', '1']);
                });
            });
            describe('APPLY', () => {
                assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                    STEPS: [{
                            type: AGGREGATE_1.AggregateSteps.APPLY,
                            expression: '@field + 1',
                            AS: 'as'
                        }]
                }), ['FT.AGGREGATE', 'index', '*', 'APPLY', '@field + 1', 'AS', 'as']);
            });
            describe('LIMIT', () => {
                assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                    STEPS: [{
                            type: AGGREGATE_1.AggregateSteps.LIMIT,
                            from: 0,
                            size: 1
                        }]
                }), ['FT.AGGREGATE', 'index', '*', 'LIMIT', '0', '1']);
            });
            describe('FILTER', () => {
                assert_1.strict.deepEqual((0, AGGREGATE_1.transformArguments)('index', '*', {
                    STEPS: [{
                            type: AGGREGATE_1.AggregateSteps.FILTER,
                            expression: '@field != ""'
                        }]
                }), ['FT.AGGREGATE', 'index', '*', 'FILTER', '@field != ""']);
            });
        });
    });
    test_utils_1.default.testWithClient('client.ft.aggregate', async (client) => {
        await Promise.all([
            client.ft.create('index', {
                field: CREATE_1.SchemaFieldTypes.NUMERIC
            }),
            client.hSet('1', 'field', '1'),
            client.hSet('2', 'field', '2')
        ]);
        assert_1.strict.deepEqual(await client.ft.aggregate('index', '*', {
            STEPS: [{
                    type: AGGREGATE_1.AggregateSteps.GROUPBY,
                    REDUCE: [{
                            type: AGGREGATE_1.AggregateGroupByReducers.SUM,
                            property: '@field',
                            AS: 'sum'
                        }, {
                            type: AGGREGATE_1.AggregateGroupByReducers.AVG,
                            property: '@field',
                            AS: 'avg'
                        }]
                }]
        }), {
            total: 1,
            results: [
                Object.create(null, {
                    sum: {
                        value: '3',
                        configurable: true,
                        enumerable: true
                    },
                    avg: {
                        value: '1.5',
                        configurable: true,
                        enumerable: true
                    }
                })
            ]
        });
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
