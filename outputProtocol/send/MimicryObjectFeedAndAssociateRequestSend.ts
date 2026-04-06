/**
 * MimicryObjectFeedAndAssociateRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MimicryObjectFeedAndAssociateRequestMessageType = "MimicryObjectFeedAndAssociateRequestMessage" as const;

export interface MimicryObjectFeedAndAssociateRequestPayload {
  foodPos?: unknown;
  foodUID?: unknown;
  hostPos?: unknown;
  hostUID?: unknown;
  mimicryPos?: unknown;
  mimicryUID?: unknown;
  preview?: unknown;
}

export class MimicryObjectFeedAndAssociateRequestSend implements MimicryObjectFeedAndAssociateRequestPayload {
  _messageType = "MimicryObjectFeedAndAssociateRequestMessage" as const;
  foodPos?: unknown;
  foodUID?: unknown;
  hostPos?: unknown;
  hostUID?: unknown;
  mimicryPos?: unknown;
  mimicryUID?: unknown;
  preview?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MimicryObjectFeedAndAssociateRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MimicryObjectFeedAndAssociateRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MimicryObjectFeedAndAssociateRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MimicryObjectFeedAndAssociateRequestPayload;
  }
}
