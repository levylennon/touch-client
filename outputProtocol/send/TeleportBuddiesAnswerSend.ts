/**
 * TeleportBuddiesAnswerMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const TeleportBuddiesAnswerMessageType = "TeleportBuddiesAnswerMessage" as const;

export interface TeleportBuddiesAnswerPayload {
  accept?: unknown;
}

export class TeleportBuddiesAnswerSend implements TeleportBuddiesAnswerPayload {
  _messageType = "TeleportBuddiesAnswerMessage" as const;
  accept?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportBuddiesAnswerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportBuddiesAnswerMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): TeleportBuddiesAnswerPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as TeleportBuddiesAnswerPayload;
  }
}
