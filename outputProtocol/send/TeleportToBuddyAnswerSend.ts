/**
 * TeleportToBuddyAnswerMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const TeleportToBuddyAnswerMessageType = "TeleportToBuddyAnswerMessage" as const;

export interface TeleportToBuddyAnswerPayload {
  accept?: unknown;
  buddyId?: unknown;
  dungeonId?: unknown;
}

export class TeleportToBuddyAnswerSend implements TeleportToBuddyAnswerPayload {
  _messageType = "TeleportToBuddyAnswerMessage" as const;
  accept?: unknown;
  buddyId?: unknown;
  dungeonId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportToBuddyAnswerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportToBuddyAnswerMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): TeleportToBuddyAnswerPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as TeleportToBuddyAnswerPayload;
  }
}
