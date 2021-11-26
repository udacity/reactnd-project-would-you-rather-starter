"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = require("@node-redis/client/dist/lib/commands/generic-transformers");
const _1 = require(".");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(index, query, options) {
    const args = ['FT.SEARCH', index, query];
    if (options === null || options === void 0 ? void 0 : options.VERBATIM) {
        args.push('VERBATIM');
    }
    if (options === null || options === void 0 ? void 0 : options.NOSTOPWORDS) {
        args.push('NOSTOPWORDS');
    }
    // if (options?.WITHSCORES) {
    //     args.push('WITHSCORES');
    // }
    // if (options?.WITHPAYLOADS) {
    //     args.push('WITHPAYLOADS');
    // }
    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'INKEYS', options === null || options === void 0 ? void 0 : options.INKEYS);
    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'INFIELDS', options === null || options === void 0 ? void 0 : options.INFIELDS);
    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'RETURN', options === null || options === void 0 ? void 0 : options.RETURN);
    if (options === null || options === void 0 ? void 0 : options.SUMMARIZE) {
        args.push('SUMMARIZE');
        if (typeof options.SUMMARIZE === 'object') {
            if (options.SUMMARIZE.FIELDS) {
                args.push('FIELDS');
                (0, generic_transformers_1.pushVerdictArgument)(args, options.SUMMARIZE.FIELDS);
            }
            if (options.SUMMARIZE.FRAGS) {
                args.push('FRAGS', options.SUMMARIZE.FRAGS.toString());
            }
            if (options.SUMMARIZE.LEN) {
                args.push('LEN', options.SUMMARIZE.LEN.toString());
            }
            if (options.SUMMARIZE.SEPARATOR) {
                args.push('SEPARATOR', options.SUMMARIZE.SEPARATOR);
            }
        }
    }
    if (options === null || options === void 0 ? void 0 : options.HIGHLIGHT) {
        args.push('HIGHLIGHT');
        if (typeof options.HIGHLIGHT === 'object') {
            if (options.HIGHLIGHT.FIELDS) {
                args.push('FIELDS');
                (0, generic_transformers_1.pushVerdictArgument)(args, options.HIGHLIGHT.FIELDS);
            }
            if (options.HIGHLIGHT.TAGS) {
                args.push('TAGS', options.HIGHLIGHT.TAGS.open, options.HIGHLIGHT.TAGS.close);
            }
        }
    }
    if (options === null || options === void 0 ? void 0 : options.SLOP) {
        args.push('SLOP', options.SLOP.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.INORDER) {
        args.push('INORDER');
    }
    if (options === null || options === void 0 ? void 0 : options.LANGUAGE) {
        args.push('LANGUAGE', options.LANGUAGE);
    }
    if (options === null || options === void 0 ? void 0 : options.EXPANDER) {
        args.push('EXPANDER', options.EXPANDER);
    }
    if (options === null || options === void 0 ? void 0 : options.SCORER) {
        args.push('SCORER', options.SCORER);
    }
    // if (options?.EXPLAINSCORE) {
    //     args.push('EXPLAINSCORE');
    // }
    // if (options?.PAYLOAD) {
    //     args.push('PAYLOAD', options.PAYLOAD);
    // }
    // if (options?.SORTBY) {
    //     args.push('SORTBY');
    //     pushSortByArguments(args, options.SORTBY);
    // }
    if (options === null || options === void 0 ? void 0 : options.MSORTBY) {
        (0, _1.pushSortByArguments)(args, 'MSORTBY', options.MSORTBY);
    }
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.from.toString(), options.LIMIT.size.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    const documents = [];
    for (let i = 1; i < reply.length; i += 2) {
        const tuples = reply[i + 1];
        documents.push({
            id: reply[i],
            value: tuples.length === 2 && tuples[0] === '$' ?
                JSON.parse(tuples[1]) :
                (0, generic_transformers_1.transformReplyTuples)(tuples)
        });
    }
    return {
        total: reply[0],
        documents
    };
}
exports.transformReply = transformReply;
