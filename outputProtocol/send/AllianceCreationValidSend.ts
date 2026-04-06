/**
 * AllianceCreationValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceCreationValidMessageType = "AllianceCreationValidMessage" as const;

export interface AllianceCreationValidPayload {
  allianceEmblem?: unknown;
  allianceName?: unknown;
  allianceTag?: unknown;
}

export class AllianceCreationValidSend implements AllianceCreationValidPayload {
  _messageType = "AllianceCreationValidMessage" as const;
  allianceEmblem?: unknown;
  allianceName?: unknown;
  allianceTag?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceCreationValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceCreationValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceCreationValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceCreationValidPayload;
  }
}
