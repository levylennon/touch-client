/**
 * PaddockRemoveItemRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PaddockRemoveItemRequestMessageType = "PaddockRemoveItemRequestMessage" as const;

export interface PaddockRemoveItemRequestPayload {
  cellId?: unknown;
}

export class PaddockRemoveItemRequestSend implements PaddockRemoveItemRequestPayload {
  _messageType = "PaddockRemoveItemRequestMessage" as const;
  cellId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PaddockRemoveItemRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PaddockRemoveItemRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PaddockRemoveItemRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PaddockRemoveItemRequestPayload;
  }
}
