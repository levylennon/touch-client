/**
 * GameFightRemoveTeamMemberMessage — inferred from .on("GameFightRemoveTeamMemberMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightRemoveTeamMemberEventName = "GameFightRemoveTeamMemberMessage" as const;

export interface GameFightRemoveTeamMemberPayload {
  charId?: unknown;
  teamId?: unknown;
}

export class GameFightRemoveTeamMemberReceive implements GameFightRemoveTeamMemberPayload {
  _messageType = "GameFightRemoveTeamMemberMessage" as const;
  charId?: unknown;
  teamId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightRemoveTeamMemberPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightRemoveTeamMemberMessage" as const;
    this._isInitialized = true;
  }
}
