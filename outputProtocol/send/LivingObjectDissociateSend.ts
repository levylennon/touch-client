/**
 * LivingObjectDissociateMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const LivingObjectDissociateMessageType = "LivingObjectDissociateMessage" as const;

export interface LivingObjectDissociatePayload {
  livingPosition?: unknown;
  livingUID?: unknown;
}

export class LivingObjectDissociateSend implements LivingObjectDissociatePayload {
  _messageType = "LivingObjectDissociateMessage" as const;
  livingPosition?: unknown;
  livingUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LivingObjectDissociatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LivingObjectDissociateMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): LivingObjectDissociatePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as LivingObjectDissociatePayload;
  }
}
