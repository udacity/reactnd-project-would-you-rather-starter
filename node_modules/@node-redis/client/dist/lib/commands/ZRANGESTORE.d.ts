export declare const FIRST_KEY_INDEX = 1;
interface ZRangeStoreOptions {
    BY?: 'SCORE' | 'LEX';
    REV?: true;
    LIMIT?: {
        offset: number;
        count: number;
    };
    WITHSCORES?: true;
}
export declare function transformArguments(dst: string, src: string, min: string | number, max: string | number, options?: ZRangeStoreOptions): Array<string>;
export declare function transformReply(reply: number): number;
export {};
