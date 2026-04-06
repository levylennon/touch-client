/**
 * GameRolePlayTaxCollectorFightRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameRolePlayTaxCollectorFightRequestMessageType = "GameRolePlayTaxCollectorFightRequestMessage" as const;

export interface GameRolePlayTaxCollectorFightRequestPayload {
  taxCollectorId?: unknown;
}

export class GameRolePlayTaxCollectorFightRequestSend implements GameRolePlayTaxCollectorFightRequestPayload {
  _messageType = "GameRolePlayTaxCollectorFightRequestMessage" as const;
  taxCollectorId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayTaxCollectorFightRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayTaxCollectorFightRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameRolePlayTaxCollectorFightRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameRolePlayTaxCollectorFightRequestPayload;
  }
}
