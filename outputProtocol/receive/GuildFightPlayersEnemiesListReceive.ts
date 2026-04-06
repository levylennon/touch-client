/**
 * GuildFightPlayersEnemiesListMessage — inferred from .on("GuildFightPlayersEnemiesListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildFightPlayersEnemiesListEventName = "GuildFightPlayersEnemiesListMessage" as const;

export interface GuildFightPlayersEnemiesListPayload {
  fightId?: unknown;
  playerInfo?: unknown;
}

export class GuildFightPlayersEnemiesListReceive implements GuildFightPlayersEnemiesListPayload {
  _messageType = "GuildFightPlayersEnemiesListMessage" as const;
  fightId?: unknown;
  playerInfo?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFightPlayersEnemiesListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFightPlayersEnemiesListMessage" as const;
    this._isInitialized = true;
  }
}
