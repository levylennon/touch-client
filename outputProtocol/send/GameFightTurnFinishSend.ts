/**
 * GameFightTurnFinishMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const GameFightTurnFinishMessageType = "GameFightTurnFinishMessage" as const;

export interface GameFightTurnFinishPayload {
}

export class GameFightTurnFinishSend implements GameFightTurnFinishPayload {
  _messageType = "GameFightTurnFinishMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnFinishPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnFinishMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightTurnFinishPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightTurnFinishPayload;
  }
}
