/**
 * StartupActionFinishedMessage — inferred from .on("StartupActionFinishedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StartupActionFinishedEventName = "StartupActionFinishedMessage" as const;

export interface StartupActionFinishedPayload {
  actionId?: unknown;
  success?: unknown;
}

export class StartupActionFinishedReceive implements StartupActionFinishedPayload {
  _messageType = "StartupActionFinishedMessage" as const;
  actionId?: unknown;
  success?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StartupActionFinishedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StartupActionFinishedMessage" as const;
    this._isInitialized = true;
  }
}
