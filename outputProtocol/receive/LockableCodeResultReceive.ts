/**
 * LockableCodeResultMessage — inferred from .on("LockableCodeResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LockableCodeResultEventName = "LockableCodeResultMessage" as const;

export interface LockableCodeResultPayload {
  result?: unknown;
}

export class LockableCodeResultReceive implements LockableCodeResultPayload {
  _messageType = "LockableCodeResultMessage" as const;
  result?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LockableCodeResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LockableCodeResultMessage" as const;
    this._isInitialized = true;
  }
}
