/**
 * GoultinesGivenMessage — inferred from .on("GoultinesGivenMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GoultinesGivenEventName = "GoultinesGivenMessage" as const;

export interface GoultinesGivenPayload {
  [key: string]: unknown;
}

export class GoultinesGivenReceive implements GoultinesGivenPayload {
  _messageType = "GoultinesGivenMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GoultinesGivenPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GoultinesGivenMessage" as const;
    this._isInitialized = true;
  }
}
