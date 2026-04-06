/**
 * SpellListMessage — inferred from .on("SpellListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpellListEventName = "SpellListMessage" as const;

export interface SpellListPayload {
  [key: string]: unknown;
}

export class SpellListReceive implements SpellListPayload {
  _messageType = "SpellListMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<SpellListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpellListMessage" as const;
    this._isInitialized = true;
  }
}
