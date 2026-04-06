/**
 * GameFightSpectateMessage — inferred from .on("GameFightSpectateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightSpectateEventName = "GameFightSpectateMessage" as const;

export interface GameFightSpectatePayload {
  [key: string]: unknown;
}

export class GameFightSpectateReceive implements GameFightSpectatePayload {
  _messageType = "GameFightSpectateMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightSpectatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightSpectateMessage" as const;
    this._isInitialized = true;
  }
}
