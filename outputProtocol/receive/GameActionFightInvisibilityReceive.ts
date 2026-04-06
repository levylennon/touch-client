/**
 * GameActionFightInvisibilityMessage — inferred from .on("GameActionFightInvisibilityMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightInvisibilityEventName = "GameActionFightInvisibilityMessage" as const;

export interface GameActionFightInvisibilityPayload {
  effectId?: unknown;
  state?: unknown;
  targetId?: unknown;
}

export class GameActionFightInvisibilityReceive implements GameActionFightInvisibilityPayload {
  _messageType = "GameActionFightInvisibilityMessage" as const;
  effectId?: unknown;
  state?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightInvisibilityPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightInvisibilityMessage" as const;
    this._isInitialized = true;
  }
}
