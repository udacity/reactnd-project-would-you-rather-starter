"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.SchemaTextFieldPhonetics = exports.SchemaFieldTypes = void 0;
const generic_transformers_1 = require("@node-redis/client/dist/lib/commands/generic-transformers");
var SchemaFieldTypes;
(function (SchemaFieldTypes) {
    SchemaFieldTypes["TEXT"] = "TEXT";
    SchemaFieldTypes["NUMERIC"] = "NUMERIC";
    SchemaFieldTypes["GEO"] = "GEO";
    SchemaFieldTypes["TAG"] = "TAG";
})(SchemaFieldTypes = exports.SchemaFieldTypes || (exports.SchemaFieldTypes = {}));
var SchemaTextFieldPhonetics;
(function (SchemaTextFieldPhonetics) {
    SchemaTextFieldPhonetics["DM_EN"] = "dm:en";
    SchemaTextFieldPhonetics["DM_FR"] = "dm:fr";
    SchemaTextFieldPhonetics["FM_PT"] = "dm:pt";
    SchemaTextFieldPhonetics["DM_ES"] = "dm:es";
})(SchemaTextFieldPhonetics = exports.SchemaTextFieldPhonetics || (exports.SchemaTextFieldPhonetics = {}));
function transformArguments(index, schema, options) {
    const args = ['FT.CREATE', index];
    if (options === null || options === void 0 ? void 0 : options.ON) {
        args.push('ON', options.ON);
    }
    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'PREFIX', options === null || options === void 0 ? void 0 : options.PREFIX);
    if (options === null || options === void 0 ? void 0 : options.FILTER) {
        args.push('FILTER', options.FILTER);
    }
    if (options === null || options === void 0 ? void 0 : options.LANGUAGE) {
        args.push('LANGUAGE', options.LANGUAGE);
    }
    if (options === null || options === void 0 ? void 0 : options.LANGUAGE_FIELD) {
        args.push('LANGUAGE_FIELD', options.LANGUAGE_FIELD);
    }
    if (options === null || options === void 0 ? void 0 : options.SCORE) {
        args.push('SCORE', options.SCORE.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.SCORE_FIELD) {
        args.push('SCORE_FIELD', options.SCORE_FIELD);
    }
    // if (options?.PAYLOAD_FIELD) {
    //     args.push('PAYLOAD_FIELD', options.PAYLOAD_FIELD);
    // }
    if (options === null || options === void 0 ? void 0 : options.MAXTEXTFIELDS) {
        args.push('MAXTEXTFIELDS');
    }
    if (options === null || options === void 0 ? void 0 : options.TEMPORARY) {
        args.push('TEMPORARY', options.TEMPORARY.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.NOOFFSETS) {
        args.push('NOOFFSETS');
    }
    if (options === null || options === void 0 ? void 0 : options.NOHL) {
        args.push('NOHL');
    }
    if (options === null || options === void 0 ? void 0 : options.NOFIELDS) {
        args.push('NOFIELDS');
    }
    if (options === null || options === void 0 ? void 0 : options.NOFREQS) {
        args.push('NOFREQS');
    }
    if (options === null || options === void 0 ? void 0 : options.SKIPINITIALSCAN) {
        args.push('SKIPINITIALSCAN');
    }
    (0, generic_transformers_1.pushOptionalVerdictArgument)(args, 'STOPWORDS', options === null || options === void 0 ? void 0 : options.STOPWORDS);
    args.push('SCHEMA');
    for (const [field, fieldOptions] of Object.entries(schema)) {
        args.push(field);
        if (typeof fieldOptions === 'string') {
            args.push(fieldOptions);
            continue;
        }
        if (fieldOptions.AS) {
            args.push('AS', fieldOptions.AS);
        }
        args.push(fieldOptions.type);
        switch (fieldOptions.type) {
            case 'TEXT':
                if (fieldOptions.NOSTEM) {
                    args.push('NOSTEM');
                }
                if (fieldOptions.WEIGHT) {
                    args.push('WEIGHT', fieldOptions.WEIGHT.toString());
                }
                if (fieldOptions.PHONETIC) {
                    args.push('PHONETIC', fieldOptions.PHONETIC);
                }
                break;
            // case 'NUMERIC':
            // case 'GEO':
            //     break;
            case 'TAG':
                if (fieldOptions.SEPERATOR) {
                    args.push('SEPERATOR', fieldOptions.SEPERATOR);
                }
                if (fieldOptions.CASESENSITIVE) {
                    args.push('CASESENSITIVE');
                }
                break;
        }
        if (fieldOptions.SORTABLE) {
            args.push('SORTABLE');
            if (fieldOptions.SORTABLE === 'UNF') {
                args.push('UNF');
            }
        }
        if (fieldOptions.NOINDEX) {
            args.push('NOINDEX');
        }
    }
    return args;
}
exports.transformArguments = transformArguments;
