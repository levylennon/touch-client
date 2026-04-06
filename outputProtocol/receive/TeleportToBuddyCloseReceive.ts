/**
 * TeleportToBuddyCloseMessage — inferred from .on("TeleportToBuddyCloseMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TeleportToBuddyCloseEventName = "TeleportToBuddyCloseMessage" as const;

export interface TeleportToBuddyClosePayload {
  buddyId?: unknown;
}

export class TeleportToBuddyCloseReceive implements TeleportToBuddyClosePayload {
  _messageType = "TeleportToBuddyCloseMessage" as const;
  buddyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportToBuddyClosePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportToBuddyCloseMessage" as const;
    this._isInitialized = true;
  }
}
