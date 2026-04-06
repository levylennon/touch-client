/**
 * LockableUseCodeMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const LockableUseCodeMessageType = "LockableUseCodeMessage" as const;

export interface LockableUseCodePayload {
  [key: string]: unknown;
}

export class LockableUseCodeSend implements LockableUseCodePayload {
  _messageType = "LockableUseCodeMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<LockableUseCodePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LockableUseCodeMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): LockableUseCodePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as LockableUseCodePayload;
  }
}
