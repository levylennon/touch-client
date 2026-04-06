/**
 * CharacterFirstSelectionMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const CharacterFirstSelectionMessageType = "CharacterFirstSelectionMessage" as const;

export interface CharacterFirstSelectionPayload {
  doTutorial?: unknown;
  id?: unknown;
}

export class CharacterFirstSelectionSend implements CharacterFirstSelectionPayload {
  _messageType = "CharacterFirstSelectionMessage" as const;
  doTutorial?: unknown;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterFirstSelectionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterFirstSelectionMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CharacterFirstSelectionPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CharacterFirstSelectionPayload;
  }
}
