/**
 * LeaveDialogMessage — inferred from .on("LeaveDialogMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LeaveDialogEventName = "LeaveDialogMessage" as const;

export interface LeaveDialogPayload {
  [key: string]: unknown;
}

export class LeaveDialogReceive implements LeaveDialogPayload {
  _messageType = "LeaveDialogMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<LeaveDialogPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LeaveDialogMessage" as const;
    this._isInitialized = true;
  }
}
