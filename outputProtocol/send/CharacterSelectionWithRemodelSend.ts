/**
 * CharacterSelectionWithRemodelMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const CharacterSelectionWithRemodelMessageType = "CharacterSelectionWithRemodelMessage" as const;

export interface CharacterSelectionWithRemodelPayload {
  id?: unknown;
  remodel?: unknown;
}

export class CharacterSelectionWithRemodelSend implements CharacterSelectionWithRemodelPayload {
  _messageType = "CharacterSelectionWithRemodelMessage" as const;
  id?: unknown;
  remodel?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterSelectionWithRemodelPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterSelectionWithRemodelMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterSelectionWithRemodelPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterSelectionWithRemodelPayload;
  }
}
