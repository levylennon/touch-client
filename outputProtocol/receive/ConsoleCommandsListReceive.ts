/**
 * ConsoleCommandsListMessage — inferred from .on("ConsoleCommandsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ConsoleCommandsListEventName = "ConsoleCommandsListMessage" as const;

export interface ConsoleCommandsListPayload {
  [key: string]: unknown;
}

export class ConsoleCommandsListReceive implements ConsoleCommandsListPayload {
  _messageType = "ConsoleCommandsListMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ConsoleCommandsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ConsoleCommandsListMessage" as const;
    this._isInitialized = true;
  }
}
