/**
 * CharacterCreationRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const CharacterCreationRequestMessageType = "CharacterCreationRequestMessage" as const;

export interface CharacterCreationRequestPayload {
  [key: string]: unknown;
}

export class CharacterCreationRequestSend implements CharacterCreationRequestPayload {
  _messageType = "CharacterCreationRequestMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterCreationRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterCreationRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterCreationRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterCreationRequestPayload;
  }
}
