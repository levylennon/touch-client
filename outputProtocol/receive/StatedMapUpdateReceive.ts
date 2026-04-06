/**
 * StatedMapUpdateMessage — inferred from .on("StatedMapUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StatedMapUpdateEventName = "StatedMapUpdateMessage" as const;

export interface StatedMapUpdatePayload {
  statedElements?: unknown;
}

export class StatedMapUpdateReceive implements StatedMapUpdatePayload {
  _messageType = "StatedMapUpdateMessage" as const;
  statedElements?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StatedMapUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StatedMapUpdateMessage" as const;
    this._isInitialized = true;
  }
}
