"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketClosedUnexpectedlyError = exports.DisconnectsClientError = exports.ClientClosedError = exports.ConnectionTimeoutError = exports.WatchError = exports.AbortError = void 0;
class AbortError extends Error {
    constructor() {
        super('The command was aborted');
    }
}
exports.AbortError = AbortError;
class WatchError extends Error {
    constructor() {
        super('One (or more) of the watched keys has been changed');
    }
}
exports.WatchError = WatchError;
class ConnectionTimeoutError extends Error {
    constructor() {
        super('Connection timeout');
    }
}
exports.ConnectionTimeoutError = ConnectionTimeoutError;
class ClientClosedError extends Error {
    constructor() {
        super('The client is closed');
    }
}
exports.ClientClosedError = ClientClosedError;
class DisconnectsClientError extends Error {
    constructor() {
        super('Disconnects client');
    }
}
exports.DisconnectsClientError = DisconnectsClientError;
class SocketClosedUnexpectedlyError extends Error {
    constructor() {
        super('Socket closed unexpectedly');
    }
}
exports.SocketClosedUnexpectedlyError = SocketClosedUnexpectedlyError;
