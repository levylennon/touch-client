/**
 * GameFightJoinRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameFightJoinRequestMessageType = "GameFightJoinRequestMessage" as const;

export interface GameFightJoinRequestPayload {
  fightId?: unknown;
  fighterId?: unknown;
}

export class GameFightJoinRequestSend implements GameFightJoinRequestPayload {
  _messageType = "GameFightJoinRequestMessage" as const;
  fightId?: unknown;
  fighterId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightJoinRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightJoinRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightJoinRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightJoinRequestPayload;
  }
}
