"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const test_utils_1 = require("../test-utils");
const INFO_1 = require("./INFO");
describe('INFO', () => {
    it('transformArguments', () => {
        assert_1.strict.deepEqual((0, INFO_1.transformArguments)('index'), ['FT.INFO', 'index']);
    });
    test_utils_1.default.testWithClient('client.ft.info', async (client) => {
        await client.ft.create('index', {}, {
            ON: 'HASH' // TODO: shouldn't be mandatory
        });
        assert_1.strict.deepEqual(await client.ft.info('index'), {
            indexName: 'index',
            indexOptions: [],
            indexDefinition: {
                defaultScore: '1',
                keyType: 'HASH',
                prefixes: ['']
            },
            attributes: [],
            numDocs: '0',
            maxDocId: '0',
            numTerms: '0',
            numRecords: '0',
            invertedSzMb: '0',
            totalInvertedIndexBlocks: '0',
            offsetVectorsSzMb: '0',
            docTableSizeMb: '0',
            sortableValuesSizeMb: '0',
            keyTableSizeMb: '0',
            recordsPerDocAvg: '-nan',
            bytesPerRecordAvg: '-nan',
            offsetsPerTermAvg: '-nan',
            offsetBitsPerRecordAvg: '-nan',
            hashIndexingFailures: '0',
            indexing: '0',
            percentIndexed: '1',
            gcStats: {
                bytesCollected: '0',
                totalMsRun: '0',
                totalCycles: '0',
                averageCycleTimeMs: '-nan',
                lastRunTimeMs: '0',
                gcNumericTreesMissed: '0',
                gcBlocksDenied: '0'
            },
            cursorStats: {
                globalIdle: 0,
                globalTotal: 0,
                indexCapacity: 128,
                idnexTotal: 0
            }
        });
    }, test_utils_1.GLOBAL.SERVERS.OPEN);
});
