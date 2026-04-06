/**
 * GameActionFightExchangePositionsMessage — inferred from .on("GameActionFightExchangePositionsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightExchangePositionsEventName = "GameActionFightExchangePositionsMessage" as const;

export interface GameActionFightExchangePositionsPayload {
  casterCellId?: unknown;
  sourceId?: unknown;
  targetCellId?: unknown;
  targetId?: unknown;
}

export class GameActionFightExchangePositionsReceive implements GameActionFightExchangePositionsPayload {
  _messageType = "GameActionFightExchangePositionsMessage" as const;
  casterCellId?: unknown;
  sourceId?: unknown;
  targetCellId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightExchangePositionsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightExchangePositionsMessage" as const;
    this._isInitialized = true;
  }
}
