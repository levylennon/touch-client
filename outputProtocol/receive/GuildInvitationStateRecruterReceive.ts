/**
 * GuildInvitationStateRecruterMessage — inferred from .on("GuildInvitationStateRecruterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInvitationStateRecruterEventName = "GuildInvitationStateRecruterMessage" as const;

export interface GuildInvitationStateRecruterPayload {
  invitationState?: unknown;
  recrutedName?: unknown;
}

export class GuildInvitationStateRecruterReceive implements GuildInvitationStateRecruterPayload {
  _messageType = "GuildInvitationStateRecruterMessage" as const;
  invitationState?: unknown;
  recrutedName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInvitationStateRecruterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInvitationStateRecruterMessage" as const;
    this._isInitialized = true;
  }
}
