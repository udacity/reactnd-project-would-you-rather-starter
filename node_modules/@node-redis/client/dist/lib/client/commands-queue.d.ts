/// <reference types="node" />
import { RedisCommandArguments, RedisCommandRawReply } from '../commands';
export interface QueueCommandOptions {
    asap?: boolean;
    chainId?: symbol;
    signal?: AbortSignal;
}
export declare enum PubSubSubscribeCommands {
    SUBSCRIBE = "SUBSCRIBE",
    PSUBSCRIBE = "PSUBSCRIBE"
}
export declare enum PubSubUnsubscribeCommands {
    UNSUBSCRIBE = "UNSUBSCRIBE",
    PUNSUBSCRIBE = "PUNSUBSCRIBE"
}
declare type PubSubArgumentTypes = Buffer | string;
export declare type PubSubListener<BUFFER_MODE extends boolean = false, T = BUFFER_MODE extends true ? Buffer : string> = (message: T, channel: T) => unknown;
export default class RedisCommandsQueue {
    #private;
    constructor(maxLength: number | null | undefined);
    addCommand<T = RedisCommandRawReply>(args: RedisCommandArguments, options?: QueueCommandOptions, bufferMode?: boolean): Promise<T>;
    subscribe<T extends boolean>(command: PubSubSubscribeCommands, channels: PubSubArgumentTypes | Array<PubSubArgumentTypes>, listener: PubSubListener<T>, bufferMode?: T): Promise<void>;
    unsubscribe<T extends boolean>(command: PubSubUnsubscribeCommands, channels?: string | Array<string>, listener?: PubSubListener<T>, bufferMode?: T): Promise<void>;
    resubscribe(): Promise<any> | undefined;
    getCommandToSend(): RedisCommandArguments | undefined;
    parseResponse(data: Buffer): void;
    flushWaitingForReply(err: Error): void;
    flushAll(err: Error): void;
}
export {};
