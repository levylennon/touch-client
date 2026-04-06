/**
 * TeleportBuddiesMessage — inferred from .on("TeleportBuddiesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TeleportBuddiesEventName = "TeleportBuddiesMessage" as const;

export interface TeleportBuddiesPayload {
  [key: string]: unknown;
}

export class TeleportBuddiesReceive implements TeleportBuddiesPayload {
  _messageType = "TeleportBuddiesMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportBuddiesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportBuddiesMessage" as const;
    this._isInitialized = true;
  }
}
