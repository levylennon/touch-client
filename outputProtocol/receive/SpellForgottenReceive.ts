/**
 * SpellForgottenMessage — inferred from .on("SpellForgottenMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpellForgottenEventName = "SpellForgottenMessage" as const;

export interface SpellForgottenPayload {
  [key: string]: unknown;
}

export class SpellForgottenReceive implements SpellForgottenPayload {
  _messageType = "SpellForgottenMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<SpellForgottenPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpellForgottenMessage" as const;
    this._isInitialized = true;
  }
}
