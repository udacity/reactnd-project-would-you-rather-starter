import { RedisCommandArguments } from '@node-redis/client/dist/lib/commands';
import { RedisSearchLanguages, PropertyName, SortByOptions } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
interface SearchOptions {
    VERBATIM?: true;
    NOSTOPWORDS?: true;
    WITHSORTKEYS?: true;
    INKEYS?: string | Array<string>;
    INFIELDS?: string | Array<string>;
    RETURN?: string | Array<string>;
    SUMMARIZE?: true | {
        FIELDS?: PropertyName | Array<PropertyName>;
        FRAGS?: number;
        LEN?: number;
        SEPARATOR?: string;
    };
    HIGHLIGHT?: true | {
        FIELDS?: PropertyName | Array<PropertyName>;
        TAGS?: {
            open: string;
            close: string;
        };
    };
    SLOP?: number;
    INORDER?: true;
    LANGUAGE?: RedisSearchLanguages;
    EXPANDER?: string;
    SCORER?: string;
    MSORTBY?: SortByOptions | Array<SortByOptions>;
    LIMIT?: {
        from: number | string;
        size: number | string;
    };
}
export declare function transformArguments(index: string, query: string, options?: SearchOptions): RedisCommandArguments;
interface SearchDocumentValue {
    [key: string]: string | number | null | Array<SearchDocumentValue> | SearchDocumentValue;
}
interface SearchReply {
    total: number;
    documents: Array<{
        id: string;
        value: SearchDocumentValue;
    }>;
}
export declare function transformReply(reply: Array<any>): SearchReply;
export {};
