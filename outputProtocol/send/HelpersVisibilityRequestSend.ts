/**
 * HelpersVisibilityRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const HelpersVisibilityRequestMessageType = "HelpersVisibilityRequestMessage" as const;

export interface HelpersVisibilityRequestPayload {
  visibility?: unknown;
}

export class HelpersVisibilityRequestSend implements HelpersVisibilityRequestPayload {
  _messageType = "HelpersVisibilityRequestMessage" as const;
  visibility?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HelpersVisibilityRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HelpersVisibilityRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HelpersVisibilityRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HelpersVisibilityRequestPayload;
  }
}
