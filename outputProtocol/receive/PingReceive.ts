/**
 * PingMessage — inferred from .on("PingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PingEventName = "PingMessage" as const;

export interface PingPayload {
  cell?: unknown;
  sender?: unknown;
  targetType?: unknown;
  type?: unknown;
}

export class PingReceive implements PingPayload {
  _messageType = "PingMessage" as const;
  cell?: unknown;
  sender?: unknown;
  targetType?: unknown;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PingMessage" as const;
    this._isInitialized = true;
  }
}
