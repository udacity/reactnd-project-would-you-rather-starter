"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments(index, type, query, options) {
    const args = ['FT.PROFILE', index, type];
    if (options === null || options === void 0 ? void 0 : options.LIMITED) {
        args.push('LIMITED');
    }
    args.push('QUERY', query);
    return args;
}
exports.transformArguments = transformArguments;
function transformReply() {
}
exports.transformReply = transformReply;
