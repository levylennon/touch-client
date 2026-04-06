/**
 * AllianceInvitedMessage — inferred from .on("AllianceInvitedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceInvitedEventName = "AllianceInvitedMessage" as const;

export interface AllianceInvitedPayload {
  allianceInfo?: {
    allianceName?: unknown;
  };
  recruterName?: unknown;
}

export class AllianceInvitedReceive implements AllianceInvitedPayload {
  _messageType = "AllianceInvitedMessage" as const;
  allianceInfo?: {
    allianceName?: unknown;
  };
  recruterName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceInvitedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceInvitedMessage" as const;
    this._isInitialized = true;
  }
}
