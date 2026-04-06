/**
 * CharacterDeletionRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const CharacterDeletionRequestMessageType = "CharacterDeletionRequestMessage" as const;

export interface CharacterDeletionRequestPayload {
  characterId?: unknown;
  secretAnswerHash?: unknown;
}

export class CharacterDeletionRequestSend implements CharacterDeletionRequestPayload {
  _messageType = "CharacterDeletionRequestMessage" as const;
  characterId?: unknown;
  secretAnswerHash?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterDeletionRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterDeletionRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterDeletionRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterDeletionRequestPayload;
  }
}
