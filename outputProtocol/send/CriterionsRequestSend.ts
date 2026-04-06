/**
 * CriterionsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const CriterionsRequestMessageType = "CriterionsRequestMessage" as const;

export interface CriterionsRequestPayload {
  criterions?: unknown;
}

export class CriterionsRequestSend implements CriterionsRequestPayload {
  _messageType = "CriterionsRequestMessage" as const;
  criterions?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CriterionsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CriterionsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): CriterionsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as CriterionsRequestPayload;
  }
}
