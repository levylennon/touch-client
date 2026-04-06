/**
 * AccessoryPreviewRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AccessoryPreviewRequestMessageType = "AccessoryPreviewRequestMessage" as const;

export interface AccessoryPreviewRequestPayload {
  genericId?: unknown;
}

export class AccessoryPreviewRequestSend implements AccessoryPreviewRequestPayload {
  _messageType = "AccessoryPreviewRequestMessage" as const;
  genericId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AccessoryPreviewRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AccessoryPreviewRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AccessoryPreviewRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AccessoryPreviewRequestPayload;
  }
}
