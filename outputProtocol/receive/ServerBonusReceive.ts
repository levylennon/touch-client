/**
 * ServerBonusMessage — inferred from .on("ServerBonusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerBonusEventName = "ServerBonusMessage" as const;

export interface ServerBonusPayload {
  jobXpBonus?: unknown;
  kolossium1VS1IsHighlighted?: unknown;
  kolossium3VS3IsHighlighted?: unknown;
}

export class ServerBonusReceive implements ServerBonusPayload {
  _messageType = "ServerBonusMessage" as const;
  jobXpBonus?: unknown;
  kolossium1VS1IsHighlighted?: unknown;
  kolossium3VS3IsHighlighted?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServerBonusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerBonusMessage" as const;
    this._isInitialized = true;
  }
}
