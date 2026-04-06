/**
 * GameContextRemoveElementWithEventMessage — inferred from .on("GameContextRemoveElementWithEventMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameContextRemoveElementWithEventEventName = "GameContextRemoveElementWithEventMessage" as const;

export interface GameContextRemoveElementWithEventPayload {
  id?: unknown;
}

export class GameContextRemoveElementWithEventReceive implements GameContextRemoveElementWithEventPayload {
  _messageType = "GameContextRemoveElementWithEventMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextRemoveElementWithEventPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextRemoveElementWithEventMessage" as const;
    this._isInitialized = true;
  }
}
