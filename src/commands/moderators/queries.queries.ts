/** Types generated for queries found in "./src/commands/moderators/queries.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'UpdateThankTime' parameters type */
export interface IUpdateThankTimeParams {
  server_id: string | null | void;
  time_in_minutes: string | null | void;
}

/** 'UpdateThankTime' return type */
export type IUpdateThankTimeResult = void;

/** 'UpdateThankTime' query type */
export interface IUpdateThankTimeQuery {
  params: IUpdateThankTimeParams;
  result: IUpdateThankTimeResult;
}

const updateThankTimeIR: any = {"name":"update_thank_time","params":[{"name":"server_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":100,"b":108,"line":3,"col":9}]}},{"name":"time_in_minutes","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":111,"b":125,"line":3,"col":20},{"a":208,"b":222,"line":6,"col":34}]}}],"usedParamSet":{"server_id":true,"time_in_minutes":true},"statement":{"body":"INSERT INTO server_config (server_id, time_between_thanking)\nVALUES (:server_id,:time_in_minutes)\nON CONFLICT ON CONSTRAINT server_config_pk\nDO\nUPDATE SET time_between_thanking=:time_in_minutes","loc":{"a":30,"b":222,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO server_config (server_id, time_between_thanking)
 * VALUES (:server_id,:time_in_minutes)
 * ON CONFLICT ON CONSTRAINT server_config_pk
 * DO
 * UPDATE SET time_between_thanking=:time_in_minutes
 * ```
 */
export const updateThankTime = new PreparedQuery<IUpdateThankTimeParams,IUpdateThankTimeResult>(updateThankTimeIR);


/** 'SetCommandChannel' parameters type */
export interface ISetCommandChannelParams {
  server_id: string | null | void;
  channel_id: string | null | void;
}

/** 'SetCommandChannel' return type */
export type ISetCommandChannelResult = void;

/** 'SetCommandChannel' query type */
export interface ISetCommandChannelQuery {
  params: ISetCommandChannelParams;
  result: ISetCommandChannelResult;
}

const setCommandChannelIR: any = {"name":"set_command_channel","params":[{"name":"server_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":322,"b":330,"line":10,"col":9}]}},{"name":"channel_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":334,"b":343,"line":10,"col":21},{"a":420,"b":429,"line":13,"col":28}]}}],"usedParamSet":{"server_id":true,"channel_id":true},"statement":{"body":"INSERT INTO server_config (server_id, command_channel)\nVALUES (:server_id, :channel_id)\nON CONFLICT ON CONSTRAINT server_config_pk\nDO\nUPDATE SET command_channel=:channel_id","loc":{"a":258,"b":429,"line":9,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO server_config (server_id, command_channel)
 * VALUES (:server_id, :channel_id)
 * ON CONFLICT ON CONSTRAINT server_config_pk
 * DO
 * UPDATE SET command_channel=:channel_id
 * ```
 */
export const setCommandChannel = new PreparedQuery<ISetCommandChannelParams,ISetCommandChannelResult>(setCommandChannelIR);


/** 'SetMuteRole' parameters type */
export interface ISetMuteRoleParams {
  server_id: string | null | void;
  role_id: string | null | void;
}

/** 'SetMuteRole' return type */
export type ISetMuteRoleResult = void;

/** 'SetMuteRole' query type */
export interface ISetMuteRoleQuery {
  params: ISetMuteRoleParams;
  result: ISetMuteRoleResult;
}

const setMuteRoleIR: any = {"name":"set_mute_role","params":[{"name":"server_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":517,"b":525,"line":17,"col":9}]}},{"name":"role_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":529,"b":535,"line":17,"col":21},{"a":606,"b":612,"line":20,"col":22}]}}],"usedParamSet":{"server_id":true,"role_id":true},"statement":{"body":"INSERT INTO server_config (server_id, mute_role)\nVALUES (:server_id, :role_id)\nON CONFLICT ON CONSTRAINT server_config_pk\nDO\nUPDATE SET mute_role=:role_id","loc":{"a":459,"b":612,"line":16,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO server_config (server_id, mute_role)
 * VALUES (:server_id, :role_id)
 * ON CONFLICT ON CONSTRAINT server_config_pk
 * DO
 * UPDATE SET mute_role=:role_id
 * ```
 */
export const setMuteRole = new PreparedQuery<ISetMuteRoleParams,ISetMuteRoleResult>(setMuteRoleIR);


/** 'GetMuteRole' parameters type */
export interface IGetMuteRoleParams {
  server_id: string | null | void;
}

/** 'GetMuteRole' return type */
export interface IGetMuteRoleResult {
  mute_role: string | null;
}

/** 'GetMuteRole' query type */
export interface IGetMuteRoleQuery {
  params: IGetMuteRoleParams;
  result: IGetMuteRoleResult;
}

const getMuteRoleIR: any = {"name":"get_mute_role","params":[{"name":"server_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":697,"b":705,"line":25,"col":19}]}}],"usedParamSet":{"server_id":true},"statement":{"body":"SELECT mute_role\nFROM server_config\nWHERE server_id = :server_id","loc":{"a":642,"b":705,"line":23,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT mute_role
 * FROM server_config
 * WHERE server_id = :server_id
 * ```
 */
export const getMuteRole = new PreparedQuery<IGetMuteRoleParams,IGetMuteRoleResult>(getMuteRoleIR);


/** 'EnableSubmissionChannel' parameters type */
export interface IEnableSubmissionChannelParams {
  server_id: string | null | void;
  from_channel: string | null | void;
  to_channel: string | null | void;
}

/** 'EnableSubmissionChannel' return type */
export type IEnableSubmissionChannelResult = void;

/** 'EnableSubmissionChannel' query type */
export interface IEnableSubmissionChannelQuery {
  params: IEnableSubmissionChannelParams;
  result: IEnableSubmissionChannelResult;
}

const enableSubmissionChannelIR: any = {"name":"enable_submission_channel","params":[{"name":"server_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":829,"b":837,"line":29,"col":9}]}},{"name":"from_channel","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":841,"b":852,"line":29,"col":21}]}},{"name":"to_channel","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":856,"b":865,"line":29,"col":36}]}}],"usedParamSet":{"server_id":true,"from_channel":true,"to_channel":true},"statement":{"body":"INSERT INTO hidden_submissions (server_id, from_channel, stored_channel)\nVALUES (:server_id, :from_channel, :to_channel)","loc":{"a":747,"b":866,"line":28,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO hidden_submissions (server_id, from_channel, stored_channel)
 * VALUES (:server_id, :from_channel, :to_channel)
 * ```
 */
export const enableSubmissionChannel = new PreparedQuery<IEnableSubmissionChannelParams,IEnableSubmissionChannelResult>(enableSubmissionChannelIR);


/** 'CheckIfChannelsAreAlreadyUsed' parameters type */
export interface ICheckIfChannelsAreAlreadyUsedParams {
  server_id: string | null | void;
  from_channel: string | null | void;
  to_channel: string | null | void;
}

/** 'CheckIfChannelsAreAlreadyUsed' return type */
export interface ICheckIfChannelsAreAlreadyUsedResult {
  from_channel_count: string | null;
  stored_channel_count: string | null;
}

/** 'CheckIfChannelsAreAlreadyUsed' query type */
export interface ICheckIfChannelsAreAlreadyUsedQuery {
  params: ICheckIfChannelsAreAlreadyUsedParams;
  result: ICheckIfChannelsAreAlreadyUsedResult;
}

const checkIfChannelsAreAlreadyUsedIR: any = {"name":"check_if_channels_are_already_used","params":[{"name":"server_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":1035,"b":1043,"line":36,"col":27},{"a":1228,"b":1236,"line":42,"col":27}]}},{"name":"from_channel","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":1073,"b":1084,"line":37,"col":28}]}},{"name":"to_channel","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":1268,"b":1277,"line":43,"col":30}]}}],"usedParamSet":{"server_id":true,"from_channel":true,"to_channel":true},"statement":{"body":"SELECT\n    (\n        SELECT count(*) AS from_channel_count\n        FROM hidden_submissions\n        WHERE server_id = :server_id\n        AND from_channel = :from_channel\n    ) AS from_channel_count,\n    (\n        SELECT count(*) AS stored_channel_count\n        FROM hidden_submissions\n        WHERE server_id = :server_id\n        AND stored_channel = :to_channel\n    ) as stored_channel_count","loc":{"a":917,"b":1307,"line":32,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *     (
 *         SELECT count(*) AS from_channel_count
 *         FROM hidden_submissions
 *         WHERE server_id = :server_id
 *         AND from_channel = :from_channel
 *     ) AS from_channel_count,
 *     (
 *         SELECT count(*) AS stored_channel_count
 *         FROM hidden_submissions
 *         WHERE server_id = :server_id
 *         AND stored_channel = :to_channel
 *     ) as stored_channel_count
 * ```
 */
export const checkIfChannelsAreAlreadyUsed = new PreparedQuery<ICheckIfChannelsAreAlreadyUsedParams,ICheckIfChannelsAreAlreadyUsedResult>(checkIfChannelsAreAlreadyUsedIR);


/** 'EndSubmission' parameters type */
export interface IEndSubmissionParams {
  server_id: string | null | void;
  from_channel: string | null | void;
}

/** 'EndSubmission' return type */
export interface IEndSubmissionResult {
  stored_channel: string;
}

/** 'EndSubmission' query type */
export interface IEndSubmissionQuery {
  params: IEndSubmissionParams;
  result: IEndSubmissionResult;
}

const endSubmissionIR: any = {"name":"end_submission","params":[{"name":"server_id","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":1388,"b":1396,"line":48,"col":19}]}},{"name":"from_channel","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":1418,"b":1429,"line":49,"col":20}]}}],"usedParamSet":{"server_id":true,"from_channel":true},"statement":{"body":"DELETE FROM hidden_submissions\nWHERE server_id = :server_id\nAND from_channel = :from_channel\nRETURNING stored_channel","loc":{"a":1338,"b":1454,"line":47,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM hidden_submissions
 * WHERE server_id = :server_id
 * AND from_channel = :from_channel
 * RETURNING stored_channel
 * ```
 */
export const endSubmission = new PreparedQuery<IEndSubmissionParams,IEndSubmissionResult>(endSubmissionIR);


