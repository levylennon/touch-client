/**
 * AllianceModificationValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceModificationValidMessageType = "AllianceModificationValidMessage" as const;

export interface AllianceModificationValidPayload {
  Alliancemblem?: unknown;
  allianceName?: unknown;
  allianceTag?: unknown;
}

export class AllianceModificationValidSend implements AllianceModificationValidPayload {
  _messageType = "AllianceModificationValidMessage" as const;
  Alliancemblem?: unknown;
  allianceName?: unknown;
  allianceTag?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceModificationValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceModificationValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceModificationValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceModificationValidPayload;
  }
}
