/**
 * SpellChangeFailureMessage — inferred from .on("SpellChangeFailureMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpellChangeFailureEventName = "SpellChangeFailureMessage" as const;

export interface SpellChangeFailurePayload {
  [key: string]: unknown;
}

export class SpellChangeFailureReceive implements SpellChangeFailurePayload {
  _messageType = "SpellChangeFailureMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<SpellChangeFailurePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpellChangeFailureMessage" as const;
    this._isInitialized = true;
  }
}
