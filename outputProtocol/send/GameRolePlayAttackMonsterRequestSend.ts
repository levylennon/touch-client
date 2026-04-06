/**
 * GameRolePlayAttackMonsterRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameRolePlayAttackMonsterRequestMessageType = "GameRolePlayAttackMonsterRequestMessage" as const;

export interface GameRolePlayAttackMonsterRequestPayload {
  monsterGroupId?: unknown;
}

export class GameRolePlayAttackMonsterRequestSend implements GameRolePlayAttackMonsterRequestPayload {
  _messageType = "GameRolePlayAttackMonsterRequestMessage" as const;
  monsterGroupId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayAttackMonsterRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayAttackMonsterRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameRolePlayAttackMonsterRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameRolePlayAttackMonsterRequestPayload;
  }
}
