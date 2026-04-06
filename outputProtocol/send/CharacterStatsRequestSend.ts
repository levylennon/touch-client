/**
 * CharacterStatsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const CharacterStatsRequestMessageType = "CharacterStatsRequestMessage" as const;

export interface CharacterStatsRequestPayload {
}

export class CharacterStatsRequestSend implements CharacterStatsRequestPayload {
  _messageType = "CharacterStatsRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<CharacterStatsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterStatsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterStatsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterStatsRequestPayload;
  }
}
