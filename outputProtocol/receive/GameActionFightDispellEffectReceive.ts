/**
 * GameActionFightDispellEffectMessage — inferred from .on("GameActionFightDispellEffectMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDispellEffectEventName = "GameActionFightDispellEffectMessage" as const;

export interface GameActionFightDispellEffectPayload {
  boostUID?: unknown;
  targetId?: unknown;
}

export class GameActionFightDispellEffectReceive implements GameActionFightDispellEffectPayload {
  _messageType = "GameActionFightDispellEffectMessage" as const;
  boostUID?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDispellEffectPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDispellEffectMessage" as const;
    this._isInitialized = true;
  }
}
