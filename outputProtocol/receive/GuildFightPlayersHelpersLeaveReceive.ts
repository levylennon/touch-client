/**
 * GuildFightPlayersHelpersLeaveMessage — inferred from .on("GuildFightPlayersHelpersLeaveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildFightPlayersHelpersLeaveEventName = "GuildFightPlayersHelpersLeaveMessage" as const;

export interface GuildFightPlayersHelpersLeavePayload {
  fightId?: unknown;
  playerId?: unknown;
}

export class GuildFightPlayersHelpersLeaveReceive implements GuildFightPlayersHelpersLeavePayload {
  _messageType = "GuildFightPlayersHelpersLeaveMessage" as const;
  fightId?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFightPlayersHelpersLeavePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFightPlayersHelpersLeaveMessage" as const;
    this._isInitialized = true;
  }
}
