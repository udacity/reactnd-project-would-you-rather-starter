"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushArgumentsWithLength = exports.pushSortByArguments = exports.RedisSearchLanguages = void 0;
const _LIST = require("./_LIST");
const AGGREGATE = require("./AGGREGATE");
const ALIASADD = require("./ALIASADD");
const ALIASDEL = require("./ALIASDEL");
const ALIASUPDATE = require("./ALIASUPDATE");
const CONFIG_GET = require("./CONFIG_GET");
const CONFIG_SET = require("./CONFIG_SET");
const CREATE = require("./CREATE");
const DICTADD = require("./DICTADD");
const DICTDEL = require("./DICTDEL");
const DICTDUMP = require("./DICTDUMP");
const DROPINDEX = require("./DROPINDEX");
const EXPLAIN = require("./EXPLAIN");
const EXPLAINCLI = require("./EXPLAINCLI");
const INFO = require("./INFO");
// import * as PROFILE from './PROFILE';
const SEARCH = require("./SEARCH");
const SPELLCHECK = require("./SPELLCHECK");
const SUGADD = require("./SUGADD");
const SUGDEL = require("./SUGDEL");
const SUGGET_WITHPAYLOADS = require("./SUGGET_WITHPAYLOADS");
const SUGGET_WITHSCORES_WITHPAYLOADS = require("./SUGGET_WITHSCORES_WITHPAYLOADS");
const SUGGET_WITHSCORES = require("./SUGGET_WITHSCORES");
const SUGGET = require("./SUGGET");
const SUGLEN = require("./SUGLEN");
const SYNDUMP = require("./SYNDUMP");
const SYNUPDATE = require("./SYNUPDATE");
const TAGVALS = require("./TAGVALS");
exports.default = {
    _LIST,
    _list: _LIST,
    AGGREGATE,
    aggregate: AGGREGATE,
    ALIASADD,
    aliasAdd: ALIASADD,
    ALIASDEL,
    aliasDel: ALIASDEL,
    ALIASUPDATE,
    aliasUpdate: ALIASUPDATE,
    CONFIG_GET,
    configGet: CONFIG_GET,
    CONFIG_SET,
    configSet: CONFIG_SET,
    CREATE,
    create: CREATE,
    DICTADD,
    dictAdd: DICTADD,
    DICTDEL,
    dictDel: DICTDEL,
    DICTDUMP,
    dictDump: DICTDUMP,
    DROPINDEX,
    dropIndex: DROPINDEX,
    EXPLAIN,
    explain: EXPLAIN,
    EXPLAINCLI,
    explainCli: EXPLAINCLI,
    INFO,
    info: INFO,
    // PROFILE,
    // profile: PROFILE,
    SEARCH,
    search: SEARCH,
    SPELLCHECK,
    spellCheck: SPELLCHECK,
    SUGADD,
    sugAdd: SUGADD,
    SUGDEL,
    sugDel: SUGDEL,
    SUGGET_WITHPAYLOADS,
    sugGetWithPayloads: SUGGET_WITHPAYLOADS,
    SUGGET_WITHSCORES_WITHPAYLOADS,
    sugGetWithScoresWithPayloads: SUGGET_WITHSCORES_WITHPAYLOADS,
    SUGGET_WITHSCORES,
    sugGetWithScores: SUGGET_WITHSCORES,
    SUGGET,
    sugGet: SUGGET,
    SUGLEN,
    sugLen: SUGLEN,
    SYNDUMP,
    synDump: SYNDUMP,
    SYNUPDATE,
    synUpdate: SYNUPDATE,
    TAGVALS,
    tagVals: TAGVALS
};
var RedisSearchLanguages;
(function (RedisSearchLanguages) {
    RedisSearchLanguages["ARABIC"] = "Arabic";
    RedisSearchLanguages["BASQUE"] = "Basque";
    RedisSearchLanguages["CATALANA"] = "Catalan";
    RedisSearchLanguages["DANISH"] = "Danish";
    RedisSearchLanguages["DUTCH"] = "Dutch";
    RedisSearchLanguages["ENGLISH"] = "English";
    RedisSearchLanguages["FINNISH"] = "Finnish";
    RedisSearchLanguages["FRENCH"] = "French";
    RedisSearchLanguages["GERMAN"] = "German";
    RedisSearchLanguages["GREEK"] = "Greek";
    RedisSearchLanguages["HUNGARIAN"] = "Hungarian";
    RedisSearchLanguages["INDONESAIN"] = "Indonesian";
    RedisSearchLanguages["IRISH"] = "Irish";
    RedisSearchLanguages["ITALIAN"] = "Italian";
    RedisSearchLanguages["LITHUANIAN"] = "Lithuanian";
    RedisSearchLanguages["NEPALI"] = "Nepali";
    RedisSearchLanguages["NORWEIGAN"] = "Norwegian";
    RedisSearchLanguages["PORTUGUESE"] = "Portuguese";
    RedisSearchLanguages["ROMANIAN"] = "Romanian";
    RedisSearchLanguages["RUSSIAN"] = "Russian";
    RedisSearchLanguages["SPANISH"] = "Spanish";
    RedisSearchLanguages["SWEDISH"] = "Swedish";
    RedisSearchLanguages["TAMIL"] = "Tamil";
    RedisSearchLanguages["TURKISH"] = "Turkish";
    RedisSearchLanguages["CHINESE"] = "Chinese";
})(RedisSearchLanguages = exports.RedisSearchLanguages || (exports.RedisSearchLanguages = {}));
function pushSortByProperty(args, sortBy) {
    if (typeof sortBy === 'string') {
        args.push(sortBy);
    }
    else {
        args.push(sortBy.BY);
        if (sortBy.DIRECTION) {
            args.push(sortBy.DIRECTION);
        }
    }
}
function pushSortByArguments(args, name, sortBy) {
    const lengthBefore = args.push(name, '' // will be overwritten
    );
    if (Array.isArray(sortBy)) {
        for (const field of sortBy) {
            pushSortByProperty(args, field);
        }
    }
    else {
        pushSortByProperty(args, sortBy);
    }
    args[lengthBefore - 1] = (args.length - lengthBefore).toString();
    return args;
}
exports.pushSortByArguments = pushSortByArguments;
function pushArgumentsWithLength(args, fn) {
    const lengthIndex = args.push('') - 1;
    fn(args);
    args[lengthIndex] = (args.length - lengthIndex - 1).toString();
    return args;
}
exports.pushArgumentsWithLength = pushArgumentsWithLength;
