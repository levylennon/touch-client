/**
 * ServerKpiSessionStartedMessage — inferred from .on("ServerKpiSessionStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerKpiSessionStartedEventName = "ServerKpiSessionStartedMessage" as const;

export interface ServerKpiSessionStartedPayload {
  kpiSessionId?: unknown;
}

export class ServerKpiSessionStartedReceive implements ServerKpiSessionStartedPayload {
  _messageType = "ServerKpiSessionStartedMessage" as const;
  kpiSessionId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServerKpiSessionStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerKpiSessionStartedMessage" as const;
    this._isInitialized = true;
  }
}
