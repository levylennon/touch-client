/**
 * AllianceInvitationStateRecruterMessage — inferred from .on("AllianceInvitationStateRecruterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceInvitationStateRecruterEventName = "AllianceInvitationStateRecruterMessage" as const;

export interface AllianceInvitationStateRecruterPayload {
  invitationState?: unknown;
  recrutedName?: unknown;
}

export class AllianceInvitationStateRecruterReceive implements AllianceInvitationStateRecruterPayload {
  _messageType = "AllianceInvitationStateRecruterMessage" as const;
  invitationState?: unknown;
  recrutedName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceInvitationStateRecruterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceInvitationStateRecruterMessage" as const;
    this._isInitialized = true;
  }
}
