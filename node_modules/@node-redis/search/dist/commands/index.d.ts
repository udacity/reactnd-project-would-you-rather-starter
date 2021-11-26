import * as _LIST from './_LIST';
import * as AGGREGATE from './AGGREGATE';
import * as ALIASADD from './ALIASADD';
import * as ALIASDEL from './ALIASDEL';
import * as ALIASUPDATE from './ALIASUPDATE';
import * as CONFIG_GET from './CONFIG_GET';
import * as CONFIG_SET from './CONFIG_SET';
import * as CREATE from './CREATE';
import * as DICTADD from './DICTADD';
import * as DICTDEL from './DICTDEL';
import * as DICTDUMP from './DICTDUMP';
import * as DROPINDEX from './DROPINDEX';
import * as EXPLAIN from './EXPLAIN';
import * as EXPLAINCLI from './EXPLAINCLI';
import * as INFO from './INFO';
import * as SEARCH from './SEARCH';
import * as SPELLCHECK from './SPELLCHECK';
import * as SUGADD from './SUGADD';
import * as SUGDEL from './SUGDEL';
import * as SUGGET_WITHPAYLOADS from './SUGGET_WITHPAYLOADS';
import * as SUGGET_WITHSCORES_WITHPAYLOADS from './SUGGET_WITHSCORES_WITHPAYLOADS';
import * as SUGGET_WITHSCORES from './SUGGET_WITHSCORES';
import * as SUGGET from './SUGGET';
import * as SUGLEN from './SUGLEN';
import * as SYNDUMP from './SYNDUMP';
import * as SYNUPDATE from './SYNUPDATE';
import * as TAGVALS from './TAGVALS';
import { RedisCommandArguments } from '@node-redis/client/dist/lib/commands';
declare const _default: {
    _LIST: typeof _LIST;
    _list: typeof _LIST;
    AGGREGATE: typeof AGGREGATE;
    aggregate: typeof AGGREGATE;
    ALIASADD: typeof ALIASADD;
    aliasAdd: typeof ALIASADD;
    ALIASDEL: typeof ALIASDEL;
    aliasDel: typeof ALIASDEL;
    ALIASUPDATE: typeof ALIASUPDATE;
    aliasUpdate: typeof ALIASUPDATE;
    CONFIG_GET: typeof CONFIG_GET;
    configGet: typeof CONFIG_GET;
    CONFIG_SET: typeof CONFIG_SET;
    configSet: typeof CONFIG_SET;
    CREATE: typeof CREATE;
    create: typeof CREATE;
    DICTADD: typeof DICTADD;
    dictAdd: typeof DICTADD;
    DICTDEL: typeof DICTDEL;
    dictDel: typeof DICTDEL;
    DICTDUMP: typeof DICTDUMP;
    dictDump: typeof DICTDUMP;
    DROPINDEX: typeof DROPINDEX;
    dropIndex: typeof DROPINDEX;
    EXPLAIN: typeof EXPLAIN;
    explain: typeof EXPLAIN;
    EXPLAINCLI: typeof EXPLAINCLI;
    explainCli: typeof EXPLAINCLI;
    INFO: typeof INFO;
    info: typeof INFO;
    SEARCH: typeof SEARCH;
    search: typeof SEARCH;
    SPELLCHECK: typeof SPELLCHECK;
    spellCheck: typeof SPELLCHECK;
    SUGADD: typeof SUGADD;
    sugAdd: typeof SUGADD;
    SUGDEL: typeof SUGDEL;
    sugDel: typeof SUGDEL;
    SUGGET_WITHPAYLOADS: typeof SUGGET_WITHPAYLOADS;
    sugGetWithPayloads: typeof SUGGET_WITHPAYLOADS;
    SUGGET_WITHSCORES_WITHPAYLOADS: typeof SUGGET_WITHSCORES_WITHPAYLOADS;
    sugGetWithScoresWithPayloads: typeof SUGGET_WITHSCORES_WITHPAYLOADS;
    SUGGET_WITHSCORES: typeof SUGGET_WITHSCORES;
    sugGetWithScores: typeof SUGGET_WITHSCORES;
    SUGGET: typeof SUGGET;
    sugGet: typeof SUGGET;
    SUGLEN: typeof SUGLEN;
    sugLen: typeof SUGLEN;
    SYNDUMP: typeof SYNDUMP;
    synDump: typeof SYNDUMP;
    SYNUPDATE: typeof SYNUPDATE;
    synUpdate: typeof SYNUPDATE;
    TAGVALS: typeof TAGVALS;
    tagVals: typeof TAGVALS;
};
export default _default;
export declare enum RedisSearchLanguages {
    ARABIC = "Arabic",
    BASQUE = "Basque",
    CATALANA = "Catalan",
    DANISH = "Danish",
    DUTCH = "Dutch",
    ENGLISH = "English",
    FINNISH = "Finnish",
    FRENCH = "French",
    GERMAN = "German",
    GREEK = "Greek",
    HUNGARIAN = "Hungarian",
    INDONESAIN = "Indonesian",
    IRISH = "Irish",
    ITALIAN = "Italian",
    LITHUANIAN = "Lithuanian",
    NEPALI = "Nepali",
    NORWEIGAN = "Norwegian",
    PORTUGUESE = "Portuguese",
    ROMANIAN = "Romanian",
    RUSSIAN = "Russian",
    SPANISH = "Spanish",
    SWEDISH = "Swedish",
    TAMIL = "Tamil",
    TURKISH = "Turkish",
    CHINESE = "Chinese"
}
export declare type PropertyName = `${'@' | '$.'}${string}`;
export declare type SortByOptions = PropertyName | {
    BY: PropertyName;
    DIRECTION?: 'ASC' | 'DESC';
};
export declare function pushSortByArguments(args: RedisCommandArguments, name: string, sortBy: SortByOptions | Array<SortByOptions>): RedisCommandArguments;
export declare function pushArgumentsWithLength(args: RedisCommandArguments, fn: (args: RedisCommandArguments) => void): RedisCommandArguments;
