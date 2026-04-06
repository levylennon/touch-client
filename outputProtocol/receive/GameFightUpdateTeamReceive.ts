/**
 * GameFightUpdateTeamMessage — inferred from .on("GameFightUpdateTeamMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightUpdateTeamEventName = "GameFightUpdateTeamMessage" as const;

export interface GameFightUpdateTeamPayload {
  fightId?: unknown;
  team?: {
    leaderId?: unknown;
    teamMembers?: {
      forEach?: unknown;
    };
  };
}

export class GameFightUpdateTeamReceive implements GameFightUpdateTeamPayload {
  _messageType = "GameFightUpdateTeamMessage" as const;
  fightId?: unknown;
  team?: {
    leaderId?: unknown;
    teamMembers?: {
      forEach?: unknown;
    };
  };
  _isInitialized = false;

  constructor(data: Partial<GameFightUpdateTeamPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightUpdateTeamMessage" as const;
    this._isInitialized = true;
  }
}
