/**
 * CharactersListRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const CharactersListRequestMessageType = "CharactersListRequestMessage" as const;

export interface CharactersListRequestPayload {
}

export class CharactersListRequestSend implements CharactersListRequestPayload {
  _messageType = "CharactersListRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<CharactersListRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharactersListRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharactersListRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharactersListRequestPayload;
  }
}
