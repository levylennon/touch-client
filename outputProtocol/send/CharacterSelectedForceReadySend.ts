/**
 * CharacterSelectedForceReadyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const CharacterSelectedForceReadyMessageType = "CharacterSelectedForceReadyMessage" as const;

export interface CharacterSelectedForceReadyPayload {
}

export class CharacterSelectedForceReadySend implements CharacterSelectedForceReadyPayload {
  _messageType = "CharacterSelectedForceReadyMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<CharacterSelectedForceReadyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterSelectedForceReadyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterSelectedForceReadyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterSelectedForceReadyPayload;
  }
}
