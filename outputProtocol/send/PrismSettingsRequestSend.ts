/**
 * PrismSettingsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PrismSettingsRequestMessageType = "PrismSettingsRequestMessage" as const;

export interface PrismSettingsRequestPayload {
  startDefenseTime?: unknown;
  subAreaId?: unknown;
}

export class PrismSettingsRequestSend implements PrismSettingsRequestPayload {
  _messageType = "PrismSettingsRequestMessage" as const;
  startDefenseTime?: unknown;
  subAreaId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismSettingsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismSettingsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PrismSettingsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PrismSettingsRequestPayload;
  }
}
