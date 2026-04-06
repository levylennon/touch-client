/**
 * TeleportToBuddyOfferMessage — inferred from .on("TeleportToBuddyOfferMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TeleportToBuddyOfferEventName = "TeleportToBuddyOfferMessage" as const;

export interface TeleportToBuddyOfferPayload {
  _dungeonName?: unknown;
  buddyId?: unknown;
  dungeonId?: unknown;
  timeLeft?: unknown;
}

export class TeleportToBuddyOfferReceive implements TeleportToBuddyOfferPayload {
  _messageType = "TeleportToBuddyOfferMessage" as const;
  _dungeonName?: unknown;
  buddyId?: unknown;
  dungeonId?: unknown;
  timeLeft?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportToBuddyOfferPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportToBuddyOfferMessage" as const;
    this._isInitialized = true;
  }
}
