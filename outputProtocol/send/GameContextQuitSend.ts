/**
 * GameContextQuitMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameContextQuitMessageType = "GameContextQuitMessage" as const;

export interface GameContextQuitPayload {
  fightId?: unknown;
}

export class GameContextQuitSend implements GameContextQuitPayload {
  _messageType = "GameContextQuitMessage" as const;
  fightId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextQuitPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextQuitMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameContextQuitPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameContextQuitPayload;
  }
}
