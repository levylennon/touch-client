/**
 * GameActionFightChangeLookMessage — inferred from .on("GameActionFightChangeLookMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightChangeLookEventName = "GameActionFightChangeLookMessage" as const;

export interface GameActionFightChangeLookPayload {
  entityLook?: unknown;
  targetId?: unknown;
}

export class GameActionFightChangeLookReceive implements GameActionFightChangeLookPayload {
  _messageType = "GameActionFightChangeLookMessage" as const;
  entityLook?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightChangeLookPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightChangeLookMessage" as const;
    this._isInitialized = true;
  }
}
