/**
 * GameFightTurnReadyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameFightTurnReadyMessageType = "GameFightTurnReadyMessage" as const;

export interface GameFightTurnReadyPayload {
  isReady?: unknown;
}

export class GameFightTurnReadySend implements GameFightTurnReadyPayload {
  _messageType = "GameFightTurnReadyMessage" as const;
  isReady?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnReadyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnReadyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightTurnReadyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightTurnReadyPayload;
  }
}
