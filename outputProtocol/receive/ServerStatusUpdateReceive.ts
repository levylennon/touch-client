/**
 * ServerStatusUpdateMessage — inferred from .on("ServerStatusUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerStatusUpdateEventName = "ServerStatusUpdateMessage" as const;

export interface ServerStatusUpdatePayload {
  server?: unknown;
}

export class ServerStatusUpdateReceive implements ServerStatusUpdatePayload {
  _messageType = "ServerStatusUpdateMessage" as const;
  server?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServerStatusUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerStatusUpdateMessage" as const;
    this._isInitialized = true;
  }
}
