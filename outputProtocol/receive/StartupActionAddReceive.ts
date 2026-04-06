/**
 * StartupActionAddMessage — inferred from .on("StartupActionAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StartupActionAddEventName = "StartupActionAddMessage" as const;

export interface StartupActionAddPayload {
  newAction?: unknown;
}

export class StartupActionAddReceive implements StartupActionAddPayload {
  _messageType = "StartupActionAddMessage" as const;
  newAction?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StartupActionAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StartupActionAddMessage" as const;
    this._isInitialized = true;
  }
}
