/**
 * GameFightOptionStateUpdateMessage — inferred from .on("GameFightOptionStateUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightOptionStateUpdateEventName = "GameFightOptionStateUpdateMessage" as const;

export interface GameFightOptionStateUpdatePayload {
  fightId?: unknown;
  option?: unknown;
  state?: unknown;
  teamId?: unknown;
}

export class GameFightOptionStateUpdateReceive implements GameFightOptionStateUpdatePayload {
  _messageType = "GameFightOptionStateUpdateMessage" as const;
  fightId?: unknown;
  option?: unknown;
  state?: unknown;
  teamId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightOptionStateUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightOptionStateUpdateMessage" as const;
    this._isInitialized = true;
  }
}
