/**
 * OrnamentSelectRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const OrnamentSelectRequestMessageType = "OrnamentSelectRequestMessage" as const;

export interface OrnamentSelectRequestPayload {
  ornamentId?: unknown;
}

export class OrnamentSelectRequestSend implements OrnamentSelectRequestPayload {
  _messageType = "OrnamentSelectRequestMessage" as const;
  ornamentId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<OrnamentSelectRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "OrnamentSelectRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): OrnamentSelectRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as OrnamentSelectRequestPayload;
  }
}
