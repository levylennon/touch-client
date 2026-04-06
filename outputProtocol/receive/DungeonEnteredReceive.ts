/**
 * DungeonEnteredMessage — inferred from .on("DungeonEnteredMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DungeonEnteredEventName = "DungeonEnteredMessage" as const;

export interface DungeonEnteredPayload {
  dungeonId?: unknown;
}

export class DungeonEnteredReceive implements DungeonEnteredPayload {
  _messageType = "DungeonEnteredMessage" as const;
  dungeonId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<DungeonEnteredPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DungeonEnteredMessage" as const;
    this._isInitialized = true;
  }
}
