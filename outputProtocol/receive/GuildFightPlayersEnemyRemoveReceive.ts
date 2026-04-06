/**
 * GuildFightPlayersEnemyRemoveMessage — inferred from .on("GuildFightPlayersEnemyRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildFightPlayersEnemyRemoveEventName = "GuildFightPlayersEnemyRemoveMessage" as const;

export interface GuildFightPlayersEnemyRemovePayload {
  fightId?: unknown;
  playerId?: unknown;
}

export class GuildFightPlayersEnemyRemoveReceive implements GuildFightPlayersEnemyRemovePayload {
  _messageType = "GuildFightPlayersEnemyRemoveMessage" as const;
  fightId?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFightPlayersEnemyRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFightPlayersEnemyRemoveMessage" as const;
    this._isInitialized = true;
  }
}
