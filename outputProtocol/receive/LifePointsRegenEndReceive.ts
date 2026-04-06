/**
 * LifePointsRegenEndMessage — inferred from .on("LifePointsRegenEndMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LifePointsRegenEndEventName = "LifePointsRegenEndMessage" as const;

export interface LifePointsRegenEndPayload {
  lifePoints?: unknown;
  maxLifePoints?: unknown;
}

export class LifePointsRegenEndReceive implements LifePointsRegenEndPayload {
  _messageType = "LifePointsRegenEndMessage" as const;
  lifePoints?: unknown;
  maxLifePoints?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LifePointsRegenEndPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LifePointsRegenEndMessage" as const;
    this._isInitialized = true;
  }
}
