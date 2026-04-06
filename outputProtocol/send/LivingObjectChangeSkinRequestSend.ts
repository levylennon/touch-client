/**
 * LivingObjectChangeSkinRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const LivingObjectChangeSkinRequestMessageType = "LivingObjectChangeSkinRequestMessage" as const;

export interface LivingObjectChangeSkinRequestPayload {
  livingPosition?: unknown;
  livingUID?: unknown;
  skinId?: unknown;
}

export class LivingObjectChangeSkinRequestSend implements LivingObjectChangeSkinRequestPayload {
  _messageType = "LivingObjectChangeSkinRequestMessage" as const;
  livingPosition?: unknown;
  livingUID?: unknown;
  skinId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LivingObjectChangeSkinRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LivingObjectChangeSkinRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): LivingObjectChangeSkinRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as LivingObjectChangeSkinRequestPayload;
  }
}
