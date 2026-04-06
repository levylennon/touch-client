/**
 * GameActionFightTriggerGlyphTrapMessage — inferred from .on("GameActionFightTriggerGlyphTrapMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightTriggerGlyphTrapEventName = "GameActionFightTriggerGlyphTrapMessage" as const;

export interface GameActionFightTriggerGlyphTrapPayload {
  _spellId?: unknown;
  effectId?: unknown;
  sourceId?: unknown;
  triggeringCharacterId?: unknown;
}

export class GameActionFightTriggerGlyphTrapReceive implements GameActionFightTriggerGlyphTrapPayload {
  _messageType = "GameActionFightTriggerGlyphTrapMessage" as const;
  _spellId?: unknown;
  effectId?: unknown;
  sourceId?: unknown;
  triggeringCharacterId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightTriggerGlyphTrapPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightTriggerGlyphTrapMessage" as const;
    this._isInitialized = true;
  }
}
