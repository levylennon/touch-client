/**
 * CharacterRemodelRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const CharacterRemodelRequestMessageType = "CharacterRemodelRequestMessage" as const;

export interface CharacterRemodelRequestPayload {
  remodel?: unknown;
}

export class CharacterRemodelRequestSend implements CharacterRemodelRequestPayload {
  _messageType = "CharacterRemodelRequestMessage" as const;
  remodel?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterRemodelRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterRemodelRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterRemodelRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterRemodelRequestPayload;
  }
}
