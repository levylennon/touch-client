/**
 * GuidedModeReturnRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const GuidedModeReturnRequestMessageType = "GuidedModeReturnRequestMessage" as const;

export interface GuidedModeReturnRequestPayload {
}

export class GuidedModeReturnRequestSend implements GuidedModeReturnRequestPayload {
  _messageType = "GuidedModeReturnRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<GuidedModeReturnRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuidedModeReturnRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuidedModeReturnRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuidedModeReturnRequestPayload;
  }
}
