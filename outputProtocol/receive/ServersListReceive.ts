/**
 * ServersListMessage — inferred from .on("ServersListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServersListEventName = "ServersListMessage" as const;

export interface ServersListPayload {
  servers?: unknown;
}

export class ServersListReceive implements ServersListPayload {
  _messageType = "ServersListMessage" as const;
  servers?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServersListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServersListMessage" as const;
    this._isInitialized = true;
  }
}
