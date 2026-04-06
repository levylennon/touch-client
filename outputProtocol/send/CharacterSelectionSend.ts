/**
 * CharacterSelectionMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const CharacterSelectionMessageType = "CharacterSelectionMessage" as const;

export interface CharacterSelectionPayload {
  id?: unknown;
}

export class CharacterSelectionSend implements CharacterSelectionPayload {
  _messageType = "CharacterSelectionMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterSelectionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterSelectionMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterSelectionPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterSelectionPayload;
  }
}
