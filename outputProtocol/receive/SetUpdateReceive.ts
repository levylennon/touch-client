/**
 * SetUpdateMessage — inferred from .on("SetUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SetUpdateEventName = "SetUpdateMessage" as const;

export interface SetUpdatePayload {
  setEffects?: unknown;
  setId?: unknown;
  setObjects?: unknown;
}

export class SetUpdateReceive implements SetUpdatePayload {
  _messageType = "SetUpdateMessage" as const;
  setEffects?: unknown;
  setId?: unknown;
  setObjects?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SetUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SetUpdateMessage" as const;
    this._isInitialized = true;
  }
}
