/**
 * FarmSelectionMessageRequest — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const FarmSelectionMessageRequestMessageType = "FarmSelectionMessageRequest" as const;

export interface FarmSelectionMessageRequestPayload {
  farmInstanceId?: unknown;
}

export class FarmSelectionMessageRequestSend implements FarmSelectionMessageRequestPayload {
  _messageType = "FarmSelectionMessageRequest" as const;
  farmInstanceId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FarmSelectionMessageRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FarmSelectionMessageRequest" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FarmSelectionMessageRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FarmSelectionMessageRequestPayload;
  }
}
