/**
 * GameMapMovementConfirmMessagе — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: pass null as the second argument to sendMessage.
 */

export const GameMapMovementConfirmMessag_MessageType = "GameMapMovementConfirmMessagе" as const;

export interface GameMapMovementConfirmMessag_Payload {
}

export class GameMapMovementConfirmMessag_Send implements GameMapMovementConfirmMessag_Payload {
  _messageType = "GameMapMovementConfirmMessagе" as const;
  _isInitialized = false;

  constructor(data: Partial<GameMapMovementConfirmMessag_Payload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapMovementConfirmMessagе" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameMapMovementConfirmMessag_Payload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameMapMovementConfirmMessag_Payload;
  }
}
