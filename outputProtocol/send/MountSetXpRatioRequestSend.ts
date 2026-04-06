/**
 * MountSetXpRatioRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MountSetXpRatioRequestMessageType = "MountSetXpRatioRequestMessage" as const;

export interface MountSetXpRatioRequestPayload {
  xpRatio?: unknown;
}

export class MountSetXpRatioRequestSend implements MountSetXpRatioRequestPayload {
  _messageType = "MountSetXpRatioRequestMessage" as const;
  xpRatio?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountSetXpRatioRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountSetXpRatioRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MountSetXpRatioRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MountSetXpRatioRequestPayload;
  }
}
