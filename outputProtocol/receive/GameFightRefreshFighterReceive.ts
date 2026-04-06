/**
 * GameFightRefreshFighterMessage — inferred from .on("GameFightRefreshFighterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightRefreshFighterEventName = "GameFightRefreshFighterMessage" as const;

export interface GameFightRefreshFighterPayload {
  informations?: unknown;
}

export class GameFightRefreshFighterReceive implements GameFightRefreshFighterPayload {
  _messageType = "GameFightRefreshFighterMessage" as const;
  informations?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightRefreshFighterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightRefreshFighterMessage" as const;
    this._isInitialized = true;
  }
}
