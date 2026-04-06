/**
 * DebugInClientMessage — inferred from .on("DebugInClientMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DebugInClientEventName = "DebugInClientMessage" as const;

export interface DebugInClientPayload {
  level?: unknown;
  message?: unknown;
}

export class DebugInClientReceive implements DebugInClientPayload {
  _messageType = "DebugInClientMessage" as const;
  level?: unknown;
  message?: unknown;
  _isInitialized = false;

  constructor(data: Partial<DebugInClientPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DebugInClientMessage" as const;
    this._isInitialized = true;
  }
}
