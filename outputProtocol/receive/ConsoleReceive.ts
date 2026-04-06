/**
 * ConsoleMessage — inferred from .on("ConsoleMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ConsoleEventName = "ConsoleMessage" as const;

export interface ConsolePayload {
  content?: unknown;
  type?: unknown;
}

export class ConsoleReceive implements ConsolePayload {
  _messageType = "ConsoleMessage" as const;
  content?: unknown;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ConsolePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ConsoleMessage" as const;
    this._isInitialized = true;
  }
}
