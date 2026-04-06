/**
 * OrnamentSelectedMessage — inferred from .on("OrnamentSelectedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const OrnamentSelectedEventName = "OrnamentSelectedMessage" as const;

export interface OrnamentSelectedPayload {
  ornamentId?: unknown;
}

export class OrnamentSelectedReceive implements OrnamentSelectedPayload {
  _messageType = "OrnamentSelectedMessage" as const;
  ornamentId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<OrnamentSelectedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "OrnamentSelectedMessage" as const;
    this._isInitialized = true;
  }
}
