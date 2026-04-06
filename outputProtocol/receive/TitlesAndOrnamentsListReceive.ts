/**
 * TitlesAndOrnamentsListMessage — inferred from .on("TitlesAndOrnamentsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TitlesAndOrnamentsListEventName = "TitlesAndOrnamentsListMessage" as const;

export interface TitlesAndOrnamentsListPayload {
  [key: string]: unknown;
}

export class TitlesAndOrnamentsListReceive implements TitlesAndOrnamentsListPayload {
  _messageType = "TitlesAndOrnamentsListMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<TitlesAndOrnamentsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TitlesAndOrnamentsListMessage" as const;
    this._isInitialized = true;
  }
}
