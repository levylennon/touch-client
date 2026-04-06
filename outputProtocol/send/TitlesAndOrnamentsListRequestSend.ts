/**
 * TitlesAndOrnamentsListRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const TitlesAndOrnamentsListRequestMessageType = "TitlesAndOrnamentsListRequestMessage" as const;

export interface TitlesAndOrnamentsListRequestPayload {
}

export class TitlesAndOrnamentsListRequestSend implements TitlesAndOrnamentsListRequestPayload {
  _messageType = "TitlesAndOrnamentsListRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<TitlesAndOrnamentsListRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TitlesAndOrnamentsListRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): TitlesAndOrnamentsListRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as TitlesAndOrnamentsListRequestPayload;
  }
}
