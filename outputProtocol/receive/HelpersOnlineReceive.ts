/**
 * HelpersOnlineMessage — inferred from .on("HelpersOnlineMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HelpersOnlineEventName = "HelpersOnlineMessage" as const;

export interface HelpersOnlinePayload {
  playerIds?: {
    length?: unknown;
  };
  playerNames?: unknown;
}

export class HelpersOnlineReceive implements HelpersOnlinePayload {
  _messageType = "HelpersOnlineMessage" as const;
  playerIds?: {
    length?: unknown;
  };
  playerNames?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HelpersOnlinePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HelpersOnlineMessage" as const;
    this._isInitialized = true;
  }
}
