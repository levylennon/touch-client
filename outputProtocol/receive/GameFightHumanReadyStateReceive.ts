/**
 * GameFightHumanReadyStateMessage — inferred from .on("GameFightHumanReadyStateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightHumanReadyStateEventName = "GameFightHumanReadyStateMessage" as const;

export interface GameFightHumanReadyStatePayload {
  characterId?: unknown;
  isReady?: unknown;
}

export class GameFightHumanReadyStateReceive implements GameFightHumanReadyStatePayload {
  _messageType = "GameFightHumanReadyStateMessage" as const;
  characterId?: unknown;
  isReady?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightHumanReadyStatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightHumanReadyStateMessage" as const;
    this._isInitialized = true;
  }
}
