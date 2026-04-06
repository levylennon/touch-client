/**
 * ExchangeReplayCountModifiedMessage — inferred from .on("ExchangeReplayCountModifiedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeReplayCountModifiedEventName = "ExchangeReplayCountModifiedMessage" as const;

export interface ExchangeReplayCountModifiedPayload {
  [key: string]: unknown;
}

export class ExchangeReplayCountModifiedReceive implements ExchangeReplayCountModifiedPayload {
  _messageType = "ExchangeReplayCountModifiedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeReplayCountModifiedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeReplayCountModifiedMessage" as const;
    this._isInitialized = true;
  }
}
