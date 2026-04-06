/**
 * AllianceInvitationMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceInvitationMessageType = "AllianceInvitationMessage" as const;

export interface AllianceInvitationPayload {
  targetId?: unknown;
}

export class AllianceInvitationSend implements AllianceInvitationPayload {
  _messageType = "AllianceInvitationMessage" as const;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceInvitationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceInvitationMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceInvitationPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceInvitationPayload;
  }
}
