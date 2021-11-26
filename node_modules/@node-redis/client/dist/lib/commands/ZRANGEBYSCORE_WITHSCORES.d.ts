import { RedisCommandArguments } from '.';
import { ZRangeByScoreOptions } from './ZRANGEBYSCORE';
export { FIRST_KEY_INDEX, IS_READ_ONLY } from './ZRANGEBYSCORE';
export declare function transformArguments(key: string, min: number | string, max: number | string, options?: ZRangeByScoreOptions): RedisCommandArguments;
export { transformReplySortedSetWithScores as transformReply } from './generic-transformers';
