/**
 * ServerBonusUpdateMessage — inferred from .on("ServerBonusUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerBonusUpdateEventName = "ServerBonusUpdateMessage" as const;

export interface ServerBonusUpdatePayload {
  jobXpBonus?: unknown;
}

export class ServerBonusUpdateReceive implements ServerBonusUpdatePayload {
  _messageType = "ServerBonusUpdateMessage" as const;
  jobXpBonus?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServerBonusUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerBonusUpdateMessage" as const;
    this._isInitialized = true;
  }
}
