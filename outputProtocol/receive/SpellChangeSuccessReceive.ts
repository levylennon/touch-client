/**
 * SpellChangeSuccessMessage — inferred from .on("SpellChangeSuccessMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpellChangeSuccessEventName = "SpellChangeSuccessMessage" as const;

export interface SpellChangeSuccessPayload {
  isDisabled?: unknown;
  spellId?: unknown;
  spellLevel?: unknown;
  spells?: {
    forEach?: unknown;
  };
}

export class SpellChangeSuccessReceive implements SpellChangeSuccessPayload {
  _messageType = "SpellChangeSuccessMessage" as const;
  isDisabled?: unknown;
  spellId?: unknown;
  spellLevel?: unknown;
  spells?: {
    forEach?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<SpellChangeSuccessPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpellChangeSuccessMessage" as const;
    this._isInitialized = true;
  }
}
