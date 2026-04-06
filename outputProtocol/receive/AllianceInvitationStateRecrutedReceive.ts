/**
 * AllianceInvitationStateRecrutedMessage — inferred from .on("AllianceInvitationStateRecrutedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceInvitationStateRecrutedEventName = "AllianceInvitationStateRecrutedMessage" as const;

export interface AllianceInvitationStateRecrutedPayload {
  invitationState?: unknown;
}

export class AllianceInvitationStateRecrutedReceive implements AllianceInvitationStateRecrutedPayload {
  _messageType = "AllianceInvitationStateRecrutedMessage" as const;
  invitationState?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceInvitationStateRecrutedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceInvitationStateRecrutedMessage" as const;
    this._isInitialized = true;
  }
}
