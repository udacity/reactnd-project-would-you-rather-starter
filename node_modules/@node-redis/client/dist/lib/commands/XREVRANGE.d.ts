interface XRangeRevOptions {
    COUNT?: number;
}
export declare function transformArguments(key: string, start: string, end: string, options?: XRangeRevOptions): Array<string>;
export { transformReplyStreamMessages as transformReply } from './generic-transformers';
