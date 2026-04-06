/**
 * LockableShowCodeDialogMessage — inferred from .on("LockableShowCodeDialogMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LockableShowCodeDialogEventName = "LockableShowCodeDialogMessage" as const;

export interface LockableShowCodeDialogPayload {
  [key: string]: unknown;
}

export class LockableShowCodeDialogReceive implements LockableShowCodeDialogPayload {
  _messageType = "LockableShowCodeDialogMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<LockableShowCodeDialogPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LockableShowCodeDialogMessage" as const;
    this._isInitialized = true;
  }
}
