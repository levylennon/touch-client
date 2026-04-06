/**
 * GameActionFightDispellSpellMessage — inferred from .on("GameActionFightDispellSpellMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDispellSpellEventName = "GameActionFightDispellSpellMessage" as const;

export interface GameActionFightDispellSpellPayload {
  effectId?: unknown;
  spellId?: unknown;
  targetId?: unknown;
}

export class GameActionFightDispellSpellReceive implements GameActionFightDispellSpellPayload {
  _messageType = "GameActionFightDispellSpellMessage" as const;
  effectId?: unknown;
  spellId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDispellSpellPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDispellSpellMessage" as const;
    this._isInitialized = true;
  }
}
