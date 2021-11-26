import { RedisSearchLanguages, PropertyName } from '.';
export declare enum SchemaFieldTypes {
    TEXT = "TEXT",
    NUMERIC = "NUMERIC",
    GEO = "GEO",
    TAG = "TAG"
}
declare type CreateSchemaField<T extends SchemaFieldTypes, E = Record<string, never>> = T | ({
    type: T;
    AS?: string;
    SORTABLE?: true | 'UNF';
    NOINDEX?: true;
} & E);
export declare enum SchemaTextFieldPhonetics {
    DM_EN = "dm:en",
    DM_FR = "dm:fr",
    FM_PT = "dm:pt",
    DM_ES = "dm:es"
}
declare type CreateSchemaTextField = CreateSchemaField<SchemaFieldTypes.TEXT, {
    NOSTEM?: true;
    WEIGHT?: number;
    PHONETIC?: SchemaTextFieldPhonetics;
}>;
declare type CreateSchemaNumericField = CreateSchemaField<SchemaFieldTypes.NUMERIC>;
declare type CreateSchemaGeoField = CreateSchemaField<SchemaFieldTypes.GEO>;
declare type CreateSchemaTagField = CreateSchemaField<SchemaFieldTypes.TAG, {
    SEPERATOR?: string;
    CASESENSITIVE?: true;
}>;
interface CreateSchema {
    [field: string]: CreateSchemaTextField | CreateSchemaNumericField | CreateSchemaGeoField | CreateSchemaTagField;
}
interface CreateOptions {
    ON?: 'HASH' | 'JSON';
    PREFIX?: string | Array<string>;
    FILTER?: string;
    LANGUAGE?: RedisSearchLanguages;
    LANGUAGE_FIELD?: PropertyName;
    SCORE?: number;
    SCORE_FIELD?: PropertyName;
    MAXTEXTFIELDS?: true;
    TEMPORARY?: number;
    NOOFFSETS?: true;
    NOHL?: true;
    NOFIELDS?: true;
    NOFREQS?: true;
    SKIPINITIALSCAN?: true;
    STOPWORDS?: string | Array<string>;
}
export declare function transformArguments(index: string, schema: CreateSchema, options?: CreateOptions): Array<string>;
export declare function transformReply(): 'OK';
export {};
