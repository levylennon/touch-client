/**
 * StartupActionsListMessage — inferred from .on("StartupActionsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StartupActionsListEventName = "StartupActionsListMessage" as const;

export interface StartupActionsListPayload {
  actions?: unknown;
}

export class StartupActionsListReceive implements StartupActionsListPayload {
  _messageType = "StartupActionsListMessage" as const;
  actions?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StartupActionsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StartupActionsListMessage" as const;
    this._isInitialized = true;
  }
}
