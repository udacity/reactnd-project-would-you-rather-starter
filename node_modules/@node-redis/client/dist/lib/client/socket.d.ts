/// <reference types="node" />
import { EventEmitter } from 'events';
import * as tls from 'tls';
import { RedisCommandArguments } from '../commands';
export interface RedisSocketCommonOptions {
    connectTimeout?: number;
    noDelay?: boolean;
    keepAlive?: number | false;
    reconnectStrategy?(retries: number): number | Error;
}
export interface RedisNetSocketOptions extends RedisSocketCommonOptions {
    port?: number;
    host?: string;
}
export interface RedisUnixSocketOptions extends RedisSocketCommonOptions {
    path: string;
}
export interface RedisTlsSocketOptions extends RedisNetSocketOptions, tls.SecureContextOptions, tls.CommonConnectionOptions {
    tls: true;
}
export declare type RedisSocketOptions = RedisNetSocketOptions | RedisUnixSocketOptions | RedisTlsSocketOptions;
export declare type RedisSocketInitiator = () => Promise<void>;
export default class RedisSocket extends EventEmitter {
    #private;
    get isOpen(): boolean;
    get isReady(): boolean;
    get writableNeedDrain(): boolean;
    constructor(initiator?: RedisSocketInitiator, options?: RedisSocketOptions);
    connect(): Promise<void>;
    writeCommand(args: RedisCommandArguments): void;
    disconnect(): void;
    quit(fn: () => Promise<unknown>): Promise<void>;
    cork(): void;
}
