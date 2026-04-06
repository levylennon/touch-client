/**
 * GameFightReadyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameFightReadyMessageType = "GameFightReadyMessage" as const;

export interface GameFightReadyPayload {
  isReady?: unknown;
}

export class GameFightReadySend implements GameFightReadyPayload {
  _messageType = "GameFightReadyMessage" as const;
  isReady?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightReadyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightReadyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightReadyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightReadyPayload;
  }
}
