/**
 * GuildInvitationStateRecrutedMessage — inferred from .on("GuildInvitationStateRecrutedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInvitationStateRecrutedEventName = "GuildInvitationStateRecrutedMessage" as const;

export interface GuildInvitationStateRecrutedPayload {
  invitationState?: unknown;
}

export class GuildInvitationStateRecrutedReceive implements GuildInvitationStateRecrutedPayload {
  _messageType = "GuildInvitationStateRecrutedMessage" as const;
  invitationState?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInvitationStateRecrutedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInvitationStateRecrutedMessage" as const;
    this._isInitialized = true;
  }
}
