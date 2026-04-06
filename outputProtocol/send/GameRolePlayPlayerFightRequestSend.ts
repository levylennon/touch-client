/**
 * GameRolePlayPlayerFightRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameRolePlayPlayerFightRequestMessageType = "GameRolePlayPlayerFightRequestMessage" as const;

export interface GameRolePlayPlayerFightRequestPayload {
  friendly?: unknown;
  targetCellId?: unknown;
  targetId?: unknown;
}

export class GameRolePlayPlayerFightRequestSend implements GameRolePlayPlayerFightRequestPayload {
  _messageType = "GameRolePlayPlayerFightRequestMessage" as const;
  friendly?: unknown;
  targetCellId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayPlayerFightRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayPlayerFightRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameRolePlayPlayerFightRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameRolePlayPlayerFightRequestPayload;
  }
}
