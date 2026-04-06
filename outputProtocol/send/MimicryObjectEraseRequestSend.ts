/**
 * MimicryObjectEraseRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MimicryObjectEraseRequestMessageType = "MimicryObjectEraseRequestMessage" as const;

export interface MimicryObjectEraseRequestPayload {
  hostPos?: unknown;
  hostUID?: unknown;
}

export class MimicryObjectEraseRequestSend implements MimicryObjectEraseRequestPayload {
  _messageType = "MimicryObjectEraseRequestMessage" as const;
  hostPos?: unknown;
  hostUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MimicryObjectEraseRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MimicryObjectEraseRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MimicryObjectEraseRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MimicryObjectEraseRequestPayload;
  }
}
