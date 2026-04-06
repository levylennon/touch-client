/**
 * SetEnableAVARequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const SetEnableAVARequestMessageType = "SetEnableAVARequestMessage" as const;

export interface SetEnableAVARequestPayload {
  enable?: unknown;
}

export class SetEnableAVARequestSend implements SetEnableAVARequestPayload {
  _messageType = "SetEnableAVARequestMessage" as const;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SetEnableAVARequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SetEnableAVARequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SetEnableAVARequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SetEnableAVARequestPayload;
  }
}
