/**
 * GameContextRemoveMultipleElementsMessage — inferred from .on("GameContextRemoveMultipleElementsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameContextRemoveMultipleElementsEventName = "GameContextRemoveMultipleElementsMessage" as const;

export interface GameContextRemoveMultipleElementsPayload {
  id?: unknown;
}

export class GameContextRemoveMultipleElementsReceive implements GameContextRemoveMultipleElementsPayload {
  _messageType = "GameContextRemoveMultipleElementsMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextRemoveMultipleElementsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextRemoveMultipleElementsMessage" as const;
    this._isInitialized = true;
  }
}
