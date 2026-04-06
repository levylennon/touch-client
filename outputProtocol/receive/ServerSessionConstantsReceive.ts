/**
 * ServerSessionConstantsMessage — inferred from .on("ServerSessionConstantsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerSessionConstantsEventName = "ServerSessionConstantsMessage" as const;

export interface ServerSessionConstantsPayload {
  variables?: {
    length?: unknown;
  };
}

export class ServerSessionConstantsReceive implements ServerSessionConstantsPayload {
  _messageType = "ServerSessionConstantsMessage" as const;
  variables?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ServerSessionConstantsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerSessionConstantsMessage" as const;
    this._isInitialized = true;
  }
}
