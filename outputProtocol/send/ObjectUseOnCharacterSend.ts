/**
 * ObjectUseOnCharacterMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectUseOnCharacterMessageType = "ObjectUseOnCharacterMessage" as const;

export interface ObjectUseOnCharacterPayload {
  characterId?: unknown;
  objectUID?: unknown;
}

export class ObjectUseOnCharacterSend implements ObjectUseOnCharacterPayload {
  _messageType = "ObjectUseOnCharacterMessage" as const;
  characterId?: unknown;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUseOnCharacterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUseOnCharacterMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectUseOnCharacterPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectUseOnCharacterPayload;
  }
}
