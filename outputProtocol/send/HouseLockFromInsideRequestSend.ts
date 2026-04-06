/**
 * HouseLockFromInsideRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const HouseLockFromInsideRequestMessageType = "HouseLockFromInsideRequestMessage" as const;

export interface HouseLockFromInsideRequestPayload {
  [key: string]: unknown;
}

export class HouseLockFromInsideRequestSend implements HouseLockFromInsideRequestPayload {
  _messageType = "HouseLockFromInsideRequestMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseLockFromInsideRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseLockFromInsideRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HouseLockFromInsideRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HouseLockFromInsideRequestPayload;
  }
}
