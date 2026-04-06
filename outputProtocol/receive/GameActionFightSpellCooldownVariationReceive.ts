/**
 * GameActionFightSpellCooldownVariationMessage — inferred from .on("GameActionFightSpellCooldownVariationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightSpellCooldownVariationEventName = "GameActionFightSpellCooldownVariationMessage" as const;

export interface GameActionFightSpellCooldownVariationPayload {
  spellId?: unknown;
  targetId?: unknown;
  value?: unknown;
}

export class GameActionFightSpellCooldownVariationReceive implements GameActionFightSpellCooldownVariationPayload {
  _messageType = "GameActionFightSpellCooldownVariationMessage" as const;
  spellId?: unknown;
  targetId?: unknown;
  value?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightSpellCooldownVariationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightSpellCooldownVariationMessage" as const;
    this._isInitialized = true;
  }
}
