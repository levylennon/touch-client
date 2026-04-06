/**
 * SetEnablePVPRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const SetEnablePVPRequestMessageType = "SetEnablePVPRequestMessage" as const;

export interface SetEnablePVPRequestPayload {
  enable?: unknown;
}

export class SetEnablePVPRequestSend implements SetEnablePVPRequestPayload {
  _messageType = "SetEnablePVPRequestMessage" as const;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SetEnablePVPRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SetEnablePVPRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SetEnablePVPRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SetEnablePVPRequestPayload;
  }
}
