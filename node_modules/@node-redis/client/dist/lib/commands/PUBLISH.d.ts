/// <reference types="node" />
import { RedisCommandArguments } from '.';
export declare function transformArguments(channel: string | Buffer, message: string | Buffer): RedisCommandArguments;
export declare function transformReply(): number;
