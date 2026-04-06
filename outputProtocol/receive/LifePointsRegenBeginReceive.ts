/**
 * LifePointsRegenBeginMessage — inferred from .on("LifePointsRegenBeginMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LifePointsRegenBeginEventName = "LifePointsRegenBeginMessage" as const;

export interface LifePointsRegenBeginPayload {
  regenRate?: unknown;
}

export class LifePointsRegenBeginReceive implements LifePointsRegenBeginPayload {
  _messageType = "LifePointsRegenBeginMessage" as const;
  regenRate?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LifePointsRegenBeginPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LifePointsRegenBeginMessage" as const;
    this._isInitialized = true;
  }
}
