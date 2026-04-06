/**
 * BasicPingMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const BasicPingMessageType = "BasicPingMessage" as const;

export interface BasicPingPayload {
  quiet?: unknown;
}

export class BasicPingSend implements BasicPingPayload {
  _messageType = "BasicPingMessage" as const;
  quiet?: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicPingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicPingMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): BasicPingPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as BasicPingPayload;
  }
}
