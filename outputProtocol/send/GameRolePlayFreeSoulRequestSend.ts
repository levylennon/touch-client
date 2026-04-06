/**
 * GameRolePlayFreeSoulRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const GameRolePlayFreeSoulRequestMessageType = "GameRolePlayFreeSoulRequestMessage" as const;

export interface GameRolePlayFreeSoulRequestPayload {
}

export class GameRolePlayFreeSoulRequestSend implements GameRolePlayFreeSoulRequestPayload {
  _messageType = "GameRolePlayFreeSoulRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayFreeSoulRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayFreeSoulRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameRolePlayFreeSoulRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameRolePlayFreeSoulRequestPayload;
  }
}
