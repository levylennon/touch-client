/**
 * GameFightShowFighterMessage — inferred from .on("GameFightShowFighterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightShowFighterEventName = "GameFightShowFighterMessage" as const;

export interface GameFightShowFighterPayload {
  informations?: {
    _isBoss?: unknown;
    _type?: unknown;
    alive?: unknown;
    contextualId?: unknown;
  };
}

export class GameFightShowFighterReceive implements GameFightShowFighterPayload {
  _messageType = "GameFightShowFighterMessage" as const;
  informations?: {
    _isBoss?: unknown;
    _type?: unknown;
    alive?: unknown;
    contextualId?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GameFightShowFighterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightShowFighterMessage" as const;
    this._isInitialized = true;
  }
}
