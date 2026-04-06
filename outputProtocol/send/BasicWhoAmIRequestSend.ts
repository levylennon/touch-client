/**
 * BasicWhoAmIRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const BasicWhoAmIRequestMessageType = "BasicWhoAmIRequestMessage" as const;

export interface BasicWhoAmIRequestPayload {
  verbose?: unknown;
}

export class BasicWhoAmIRequestSend implements BasicWhoAmIRequestPayload {
  _messageType = "BasicWhoAmIRequestMessage" as const;
  verbose?: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicWhoAmIRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicWhoAmIRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): BasicWhoAmIRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as BasicWhoAmIRequestPayload;
  }
}
