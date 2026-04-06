/**
 * GameActionFightCastOnTargetRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameActionFightCastOnTargetRequestMessageType = "GameActionFightCastOnTargetRequestMessage" as const;

export interface GameActionFightCastOnTargetRequestPayload {
  spellId?: unknown;
  targetId?: unknown;
}

export class GameActionFightCastOnTargetRequestSend implements GameActionFightCastOnTargetRequestPayload {
  _messageType = "GameActionFightCastOnTargetRequestMessage" as const;
  spellId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightCastOnTargetRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightCastOnTargetRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameActionFightCastOnTargetRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameActionFightCastOnTargetRequestPayload;
  }
}
