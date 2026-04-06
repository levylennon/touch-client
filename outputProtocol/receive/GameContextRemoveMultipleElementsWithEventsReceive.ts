/**
 * GameContextRemoveMultipleElementsWithEventsMessage — inferred from .on("GameContextRemoveMultipleElementsWithEventsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameContextRemoveMultipleElementsWithEventsEventName = "GameContextRemoveMultipleElementsWithEventsMessage" as const;

export interface GameContextRemoveMultipleElementsWithEventsPayload {
  id?: unknown;
}

export class GameContextRemoveMultipleElementsWithEventsReceive implements GameContextRemoveMultipleElementsWithEventsPayload {
  _messageType = "GameContextRemoveMultipleElementsWithEventsMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextRemoveMultipleElementsWithEventsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextRemoveMultipleElementsWithEventsMessage" as const;
    this._isInitialized = true;
  }
}
