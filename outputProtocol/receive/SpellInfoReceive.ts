/**
 * SpellInfoMessage — inferred from .on("SpellInfoMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpellInfoEventName = "SpellInfoMessage" as const;

export interface SpellInfoPayload {
  [key: string]: unknown;
}

export class SpellInfoReceive implements SpellInfoPayload {
  _messageType = "SpellInfoMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<SpellInfoPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpellInfoMessage" as const;
    this._isInitialized = true;
  }
}
