/**
 * OrnamentGainedMessage — inferred from .on("OrnamentGainedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const OrnamentGainedEventName = "OrnamentGainedMessage" as const;

export interface OrnamentGainedPayload {
  ornamentId?: unknown;
}

export class OrnamentGainedReceive implements OrnamentGainedPayload {
  _messageType = "OrnamentGainedMessage" as const;
  ornamentId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<OrnamentGainedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "OrnamentGainedMessage" as const;
    this._isInitialized = true;
  }
}
