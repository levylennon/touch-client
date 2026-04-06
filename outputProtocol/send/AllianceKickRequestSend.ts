/**
 * AllianceKickRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceKickRequestMessageType = "AllianceKickRequestMessage" as const;

export interface AllianceKickRequestPayload {
  kickedId?: unknown;
}

export class AllianceKickRequestSend implements AllianceKickRequestPayload {
  _messageType = "AllianceKickRequestMessage" as const;
  kickedId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceKickRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceKickRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceKickRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceKickRequestPayload;
  }
}
