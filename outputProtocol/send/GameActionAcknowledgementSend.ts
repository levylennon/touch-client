/**
 * GameActionAcknowledgementMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameActionAcknowledgementMessageType = "GameActionAcknowledgementMessage" as const;

export interface GameActionAcknowledgementPayload {
  actionId?: unknown;
  valid?: unknown;
}

export class GameActionAcknowledgementSend implements GameActionAcknowledgementPayload {
  _messageType = "GameActionAcknowledgementMessage" as const;
  actionId?: unknown;
  valid?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionAcknowledgementPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionAcknowledgementMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameActionAcknowledgementPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameActionAcknowledgementPayload;
  }
}
