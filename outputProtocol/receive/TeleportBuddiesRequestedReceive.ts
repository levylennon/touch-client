/**
 * TeleportBuddiesRequestedMessage — inferred from .on("TeleportBuddiesRequestedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TeleportBuddiesRequestedEventName = "TeleportBuddiesRequestedMessage" as const;

export interface TeleportBuddiesRequestedPayload {
  _dungeonName?: unknown;
  invalidBuddiesIds?: {
    length?: unknown;
  };
  inviterId?: unknown;
}

export class TeleportBuddiesRequestedReceive implements TeleportBuddiesRequestedPayload {
  _messageType = "TeleportBuddiesRequestedMessage" as const;
  _dungeonName?: unknown;
  invalidBuddiesIds?: {
    length?: unknown;
  };
  inviterId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportBuddiesRequestedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportBuddiesRequestedMessage" as const;
    this._isInitialized = true;
  }
}
