/**
 * GameFightOptionToggleMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameFightOptionToggleMessageType = "GameFightOptionToggleMessage" as const;

export interface GameFightOptionTogglePayload {
  option?: unknown;
}

export class GameFightOptionToggleSend implements GameFightOptionTogglePayload {
  _messageType = "GameFightOptionToggleMessage" as const;
  option?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightOptionTogglePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightOptionToggleMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightOptionTogglePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightOptionTogglePayload;
  }
}
