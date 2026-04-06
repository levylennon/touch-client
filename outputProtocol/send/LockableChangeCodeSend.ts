/**
 * LockableChangeCodeMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const LockableChangeCodeMessageType = "LockableChangeCodeMessage" as const;

export interface LockableChangeCodePayload {
  [key: string]: unknown;
}

export class LockableChangeCodeSend implements LockableChangeCodePayload {
  _messageType = "LockableChangeCodeMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<LockableChangeCodePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LockableChangeCodeMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): LockableChangeCodePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as LockableChangeCodePayload;
  }
}
