/**
 * AllianceModificationEmblemValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceModificationEmblemValidMessageType = "AllianceModificationEmblemValidMessage" as const;

export interface AllianceModificationEmblemValidPayload {
  Alliancemblem?: unknown;
}

export class AllianceModificationEmblemValidSend implements AllianceModificationEmblemValidPayload {
  _messageType = "AllianceModificationEmblemValidMessage" as const;
  Alliancemblem?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceModificationEmblemValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceModificationEmblemValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceModificationEmblemValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceModificationEmblemValidPayload;
  }
}
