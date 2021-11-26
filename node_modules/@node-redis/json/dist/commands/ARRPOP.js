"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, path, index) {
    const args = ['JSON.ARRPOP', key];
    if (path) {
        args.push(path);
        if (index !== undefined && index !== null) {
            args.push(index.toString());
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
var _1 = require(".");
Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return _1.transformRedisJsonNullArrayNullReply; } });
