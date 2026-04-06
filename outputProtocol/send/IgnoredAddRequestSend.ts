/**
 * IgnoredAddRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const IgnoredAddRequestMessageType = "IgnoredAddRequestMessage" as const;

export interface IgnoredAddRequestPayload {
  name?: unknown;
  session?: unknown;
}

export class IgnoredAddRequestSend implements IgnoredAddRequestPayload {
  _messageType = "IgnoredAddRequestMessage" as const;
  name?: unknown;
  session?: unknown;
  _isInitialized = false;

  constructor(data: Partial<IgnoredAddRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IgnoredAddRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): IgnoredAddRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as IgnoredAddRequestPayload;
  }
}
