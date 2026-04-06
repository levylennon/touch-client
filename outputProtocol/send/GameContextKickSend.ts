/**
 * GameContextKickMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameContextKickMessageType = "GameContextKickMessage" as const;

export interface GameContextKickPayload {
  targetId?: unknown;
}

export class GameContextKickSend implements GameContextKickPayload {
  _messageType = "GameContextKickMessage" as const;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextKickPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextKickMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameContextKickPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameContextKickPayload;
  }
}
