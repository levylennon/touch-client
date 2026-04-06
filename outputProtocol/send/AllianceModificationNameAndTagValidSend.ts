/**
 * AllianceModificationNameAndTagValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceModificationNameAndTagValidMessageType = "AllianceModificationNameAndTagValidMessage" as const;

export interface AllianceModificationNameAndTagValidPayload {
  allianceName?: unknown;
  allianceTag?: unknown;
}

export class AllianceModificationNameAndTagValidSend implements AllianceModificationNameAndTagValidPayload {
  _messageType = "AllianceModificationNameAndTagValidMessage" as const;
  allianceName?: unknown;
  allianceTag?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceModificationNameAndTagValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceModificationNameAndTagValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceModificationNameAndTagValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceModificationNameAndTagValidPayload;
  }
}
