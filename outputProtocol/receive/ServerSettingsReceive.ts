/**
 * ServerSettingsMessage — inferred from .on("ServerSettingsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerSettingsEventName = "ServerSettingsMessage" as const;

export interface ServerSettingsPayload {
  community?: unknown;
  gameType?: unknown;
  lang?: unknown;
}

export class ServerSettingsReceive implements ServerSettingsPayload {
  _messageType = "ServerSettingsMessage" as const;
  community?: unknown;
  gameType?: unknown;
  lang?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServerSettingsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerSettingsMessage" as const;
    this._isInitialized = true;
  }
}
