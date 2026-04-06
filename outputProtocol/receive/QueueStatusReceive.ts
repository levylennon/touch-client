/**
 * QueueStatusMessage — inferred from .on("QueueStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QueueStatusEventName = "QueueStatusMessage" as const;

export interface QueueStatusPayload {
  position?: unknown;
  total?: unknown;
}

export class QueueStatusReceive implements QueueStatusPayload {
  _messageType = "QueueStatusMessage" as const;
  position?: unknown;
  total?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QueueStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QueueStatusMessage" as const;
    this._isInitialized = true;
  }
}
