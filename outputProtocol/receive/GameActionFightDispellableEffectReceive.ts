/**
 * GameActionFightDispellableEffectMessage — inferred from .on("GameActionFightDispellableEffectMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDispellableEffectEventName = "GameActionFightDispellableEffectMessage" as const;

export interface GameActionFightDispellableEffectPayload {
  [key: string]: unknown;
}

export class GameActionFightDispellableEffectReceive implements GameActionFightDispellableEffectPayload {
  _messageType = "GameActionFightDispellableEffectMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDispellableEffectPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDispellableEffectMessage" as const;
    this._isInitialized = true;
  }
}
