/// <reference types="node" />
import COMMANDS from './commands';
import { RedisCommand, RedisCommandArguments, RedisCommandRawReply, RedisCommandReply, RedisModules, RedisPlugins, RedisScript, RedisScripts } from '../commands';
import { RedisSocketOptions } from './socket';
import { PubSubListener, QueueCommandOptions } from './commands-queue';
import { RedisClientMultiCommandType } from './multi-command';
import { RedisMultiQueuedCommand } from '../multi-command';
import { EventEmitter } from 'events';
import { CommandOptions } from '../command-options';
import { ScanOptions, ZMember } from '../commands/generic-transformers';
import { ScanCommandOptions } from '../commands/SCAN';
import { HScanTuple } from '../commands/HSCAN';
import { LegacyCommandArguments } from '../commander';
import { Options as PoolOptions } from 'generic-pool';
export interface RedisClientOptions<M extends RedisModules, S extends RedisScripts> extends RedisPlugins<M, S> {
    url?: string;
    socket?: RedisSocketOptions;
    username?: string;
    password?: string;
    database?: number;
    commandsQueueMaxLength?: number;
    readonly?: boolean;
    legacyMode?: boolean;
    isolationPoolOptions?: PoolOptions;
}
export declare type RedisClientCommandSignature<C extends RedisCommand> = (...args: Parameters<C['transformArguments']> | [options: CommandOptions<ClientCommandOptions>, ...rest: Parameters<C['transformArguments']>]) => Promise<RedisCommandReply<C>>;
declare type WithCommands = {
    [P in keyof typeof COMMANDS]: RedisClientCommandSignature<(typeof COMMANDS)[P]>;
};
export declare type WithModules<M extends RedisModules> = {
    [P in keyof M as M[P] extends never ? never : P]: {
        [C in keyof M[P]]: RedisClientCommandSignature<M[P][C]>;
    };
};
export declare type WithScripts<S extends RedisScripts> = {
    [P in keyof S as S[P] extends never ? never : P]: RedisClientCommandSignature<S[P]>;
};
export declare type RedisClientType<M extends RedisModules = Record<string, never>, S extends RedisScripts = Record<string, never>> = RedisClient<M, S> & WithCommands & WithModules<M> & WithScripts<S>;
export declare type InstantiableRedisClient<M extends RedisModules, S extends RedisScripts> = new (...args: ConstructorParameters<typeof RedisClient>) => RedisClientType<M, S>;
export interface ClientCommandOptions extends QueueCommandOptions {
    isolated?: boolean;
}
declare type ClientLegacyCallback = (err: Error | null, reply?: RedisCommandRawReply) => void;
export declare type ClientLegacyCommandArguments = LegacyCommandArguments | [...LegacyCommandArguments, ClientLegacyCallback];
export default class RedisClient<M extends RedisModules, S extends RedisScripts> extends EventEmitter {
    #private;
    static commandOptions(options: ClientCommandOptions): CommandOptions<ClientCommandOptions>;
    static extend<M extends RedisModules = Record<string, never>, S extends RedisScripts = Record<string, never>>(plugins?: RedisPlugins<M, S>): InstantiableRedisClient<M, S>;
    static create<M extends RedisModules = Record<string, never>, S extends RedisScripts = Record<string, never>>(options?: RedisClientOptions<M, S>): RedisClientType<M, S>;
    static parseURL(url: string): RedisClientOptions<Record<string, never>, Record<string, never>>;
    get options(): RedisClientOptions<M, S> | undefined;
    get isOpen(): boolean;
    get v4(): Record<string, any>;
    constructor(options?: RedisClientOptions<M, S>);
    duplicate(overrides?: Partial<RedisClientOptions<M, S>>): RedisClientType<M, S>;
    connect(): Promise<void>;
    commandsExecutor(command: RedisCommand, args: Array<unknown>): Promise<RedisCommandReply<typeof command>>;
    sendCommand<T = RedisCommandRawReply>(args: RedisCommandArguments, options?: ClientCommandOptions, bufferMode?: boolean): Promise<T>;
    scriptsExecutor(script: RedisScript, args: Array<unknown>): Promise<RedisCommandReply<typeof script>>;
    executeScript(script: RedisScript, args: RedisCommandArguments, options?: ClientCommandOptions, bufferMode?: boolean): Promise<RedisCommandReply<typeof script>>;
    SELECT(db: number): Promise<void>;
    SELECT(options: CommandOptions<ClientCommandOptions>, db: number): Promise<void>;
    select: {
        (db: number): Promise<void>;
        (options: CommandOptions<ClientCommandOptions>, db: number): Promise<void>;
    };
    SUBSCRIBE<T extends boolean = false>(channels: string | Array<string>, listener: PubSubListener<T>, bufferMode?: T): Promise<void>;
    subscribe: <T extends boolean = false>(channels: string | Array<string>, listener: PubSubListener<T, T extends true ? Buffer : string>, bufferMode?: T | undefined) => Promise<void>;
    PSUBSCRIBE<T extends boolean = false>(patterns: string | Array<string>, listener: PubSubListener<T>, bufferMode?: T): Promise<void>;
    pSubscribe: <T extends boolean = false>(patterns: string | Array<string>, listener: PubSubListener<T, T extends true ? Buffer : string>, bufferMode?: T | undefined) => Promise<void>;
    UNSUBSCRIBE<T extends boolean = false>(channels?: string | Array<string>, listener?: PubSubListener<T>, bufferMode?: T): Promise<void>;
    unsubscribe: <T extends boolean = false>(channels?: string | string[] | undefined, listener?: PubSubListener<T, T extends true ? Buffer : string> | undefined, bufferMode?: T | undefined) => Promise<void>;
    PUNSUBSCRIBE<T extends boolean = false>(patterns?: string | Array<string>, listener?: PubSubListener<T>, bufferMode?: T): Promise<void>;
    pUnsubscribe: <T extends boolean = false>(patterns?: string | string[] | undefined, listener?: PubSubListener<T, T extends true ? Buffer : string> | undefined, bufferMode?: T | undefined) => Promise<void>;
    QUIT(): Promise<void>;
    quit: () => Promise<void>;
    executeIsolated<T>(fn: (client: RedisClientType<M, S>) => T | Promise<T>): Promise<T>;
    multi(): RedisClientMultiCommandType<M, S>;
    multiExecutor(commands: Array<RedisMultiQueuedCommand>, chainId?: symbol): Promise<Array<RedisCommandRawReply>>;
    scanIterator(options?: ScanCommandOptions): AsyncIterable<string>;
    hScanIterator(key: string, options?: ScanOptions): AsyncIterable<HScanTuple>;
    sScanIterator(key: string, options?: ScanOptions): AsyncIterable<string>;
    zScanIterator(key: string, options?: ScanOptions): AsyncIterable<ZMember>;
    disconnect(): Promise<void>;
}
export {};
