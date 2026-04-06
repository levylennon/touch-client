/**
 * GameActionFightVanishMessage — inferred from .on("GameActionFightVanishMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightVanishEventName = "GameActionFightVanishMessage" as const;

export interface GameActionFightVanishPayload {
  targetId?: unknown;
}

export class GameActionFightVanishReceive implements GameActionFightVanishPayload {
  _messageType = "GameActionFightVanishMessage" as const;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightVanishPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightVanishMessage" as const;
    this._isInitialized = true;
  }
}
