/**
 * SpellForgetUIMessage — inferred from .on("SpellForgetUIMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpellForgetUIEventName = "SpellForgetUIMessage" as const;

export interface SpellForgetUIPayload {
  open?: unknown;
}

export class SpellForgetUIReceive implements SpellForgetUIPayload {
  _messageType = "SpellForgetUIMessage" as const;
  open?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SpellForgetUIPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpellForgetUIMessage" as const;
    this._isInitialized = true;
  }
}
