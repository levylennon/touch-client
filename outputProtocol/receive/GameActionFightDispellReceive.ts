/**
 * GameActionFightDispellMessage — inferred from .on("GameActionFightDispellMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDispellEventName = "GameActionFightDispellMessage" as const;

export interface GameActionFightDispellPayload {
  effectId?: unknown;
  targetId?: unknown;
}

export class GameActionFightDispellReceive implements GameActionFightDispellPayload {
  _messageType = "GameActionFightDispellMessage" as const;
  effectId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDispellPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDispellMessage" as const;
    this._isInitialized = true;
  }
}
