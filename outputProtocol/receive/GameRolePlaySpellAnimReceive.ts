/**
 * GameRolePlaySpellAnimMessage — inferred from .on("GameRolePlaySpellAnimMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlaySpellAnimEventName = "GameRolePlaySpellAnimMessage" as const;

export interface GameRolePlaySpellAnimPayload {
  [key: string]: unknown;
}

export class GameRolePlaySpellAnimReceive implements GameRolePlaySpellAnimPayload {
  _messageType = "GameRolePlaySpellAnimMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlaySpellAnimPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlaySpellAnimMessage" as const;
    this._isInitialized = true;
  }
}
