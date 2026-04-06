/**
 * GuildFightPlayersHelpersJoinMessage — inferred from .on("GuildFightPlayersHelpersJoinMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildFightPlayersHelpersJoinEventName = "GuildFightPlayersHelpersJoinMessage" as const;

export interface GuildFightPlayersHelpersJoinPayload {
  fightId?: unknown;
  playerInfo?: unknown;
}

export class GuildFightPlayersHelpersJoinReceive implements GuildFightPlayersHelpersJoinPayload {
  _messageType = "GuildFightPlayersHelpersJoinMessage" as const;
  fightId?: unknown;
  playerInfo?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFightPlayersHelpersJoinPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFightPlayersHelpersJoinMessage" as const;
    this._isInitialized = true;
  }
}
