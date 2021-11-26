interface CopyCommandOptions {
    destinationDb?: number;
    replace?: boolean;
}
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(source: string, destination: string, options?: CopyCommandOptions): Array<string>;
export { transformReplyBoolean as transformReply } from './generic-transformers';
