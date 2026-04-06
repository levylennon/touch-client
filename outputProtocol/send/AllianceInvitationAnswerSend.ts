/**
 * AllianceInvitationAnswerMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceInvitationAnswerMessageType = "AllianceInvitationAnswerMessage" as const;

export interface AllianceInvitationAnswerPayload {
  accept?: unknown;
}

export class AllianceInvitationAnswerSend implements AllianceInvitationAnswerPayload {
  _messageType = "AllianceInvitationAnswerMessage" as const;
  accept?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceInvitationAnswerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceInvitationAnswerMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceInvitationAnswerPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceInvitationAnswerPayload;
  }
}
