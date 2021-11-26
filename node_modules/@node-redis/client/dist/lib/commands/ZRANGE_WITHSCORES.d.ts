import { transformArguments as transformZRangeArguments } from './ZRANGE';
export { FIRST_KEY_INDEX, IS_READ_ONLY } from './ZRANGE';
export declare function transformArguments(...args: Parameters<typeof transformZRangeArguments>): Array<string>;
export { transformReplySortedSetWithScores as transformReply } from './generic-transformers';
