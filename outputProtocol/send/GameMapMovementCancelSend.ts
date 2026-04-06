/**
 * GameMapMovementCancelMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameMapMovementCancelMessageType = "GameMapMovementCancelMessage" as const;

export interface GameMapMovementCancelPayload {
  cellId?: unknown;
}

export class GameMapMovementCancelSend implements GameMapMovementCancelPayload {
  _messageType = "GameMapMovementCancelMessage" as const;
  cellId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameMapMovementCancelPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapMovementCancelMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameMapMovementCancelPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameMapMovementCancelPayload;
  }
}
