import { RedisCommandArguments } from '.';
export declare function transformArguments(sha1: string | Array<string>): RedisCommandArguments;
export { transformReplyBooleanArray as transformReply } from './generic-transformers';
