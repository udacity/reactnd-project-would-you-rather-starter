import TestUtils from '@node-redis/test-utils';
declare const _default: TestUtils<import("@node-redis/client/lib/commands").RedisModules, import("@node-redis/client/lib/commands").RedisScripts>;
export default _default;
export declare const GLOBAL: {
    SERVERS: {
        OPEN: {
            serverArguments: string[];
            clientOptions: {
                modules: {
                    json: {
                        ARRAPPEND: typeof import("./commands/ARRAPPEND");
                        arrAppend: typeof import("./commands/ARRAPPEND");
                        ARRINDEX: typeof import("./commands/ARRINDEX");
                        arrIndex: typeof import("./commands/ARRINDEX");
                        ARRINSERT: typeof import("./commands/ARRINSERT");
                        arrInsert: typeof import("./commands/ARRINSERT");
                        ARRLEN: typeof import("./commands/ARRLEN");
                        arrLen: typeof import("./commands/ARRLEN");
                        ARRPOP: typeof import("./commands/ARRPOP");
                        arrPop: typeof import("./commands/ARRPOP");
                        ARRTRIM: typeof import("./commands/ARRTRIM");
                        arrTrim: typeof import("./commands/ARRTRIM");
                        DEBUG_MEMORY: typeof import("./commands/DEBUG_MEMORY");
                        debugMemory: typeof import("./commands/DEBUG_MEMORY");
                        DEL: typeof import("./commands/DEL");
                        del: typeof import("./commands/DEL");
                        FORGET: typeof import("./commands/FORGET");
                        forget: typeof import("./commands/FORGET");
                        GET: typeof import("./commands/GET");
                        get: typeof import("./commands/GET");
                        MGET: typeof import("./commands/MGET");
                        mGet: typeof import("./commands/MGET");
                        NUMINCRBY: typeof import("./commands/NUMINCRBY");
                        numIncrBy: typeof import("./commands/NUMINCRBY");
                        NUMMULTBY: typeof import("./commands/NUMMULTBY");
                        numMultBy: typeof import("./commands/NUMMULTBY");
                        OBJKEYS: typeof import("./commands/OBJKEYS");
                        objKeys: typeof import("./commands/OBJKEYS");
                        OBJLEN: typeof import("./commands/OBJLEN");
                        objLen: typeof import("./commands/OBJLEN");
                        RESP: typeof import("./commands/RESP");
                        resp: typeof import("./commands/RESP");
                        SET: typeof import("./commands/SET");
                        set: typeof import("./commands/SET");
                        STRAPPEND: typeof import("./commands/STRAPPEND");
                        strAppend: typeof import("./commands/STRAPPEND");
                        STRLEN: typeof import("./commands/STRLEN");
                        strLen: typeof import("./commands/STRLEN");
                        TYPE: typeof import("./commands/TYPE");
                        type: typeof import("./commands/TYPE");
                    };
                };
            };
        };
    };
};
