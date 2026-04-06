/**
 * BasicWhoIsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const BasicWhoIsRequestMessageType = "BasicWhoIsRequestMessage" as const;

export interface BasicWhoIsRequestPayload {
  search?: unknown;
  verbose?: unknown;
}

export class BasicWhoIsRequestSend implements BasicWhoIsRequestPayload {
  _messageType = "BasicWhoIsRequestMessage" as const;
  search?: unknown;
  verbose?: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicWhoIsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicWhoIsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): BasicWhoIsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as BasicWhoIsRequestPayload;
  }
}
