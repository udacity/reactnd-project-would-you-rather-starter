export declare const IS_READ_ONLY = true;
interface ProfileOptions {
    LIMITED?: true;
}
export declare function transformArguments(index: string, type: 'SEARCH' | 'AGGREGATE', query: string, options?: ProfileOptions): Array<string>;
export declare function transformReply(): void;
export {};
