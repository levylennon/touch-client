/**
 * QuestsUpdatedMessage — inferred from .on("QuestsUpdatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestsUpdatedEventName = "QuestsUpdatedMessage" as const;

export interface QuestsUpdatedPayload {
  objectives?: {
    length?: unknown;
  };
  questId?: unknown;
  quests?: {
    forEach?: unknown;
  };
  stepId?: unknown;
}

export class QuestsUpdatedReceive implements QuestsUpdatedPayload {
  _messageType = "QuestsUpdatedMessage" as const;
  objectives?: {
    length?: unknown;
  };
  questId?: unknown;
  quests?: {
    forEach?: unknown;
  };
  stepId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestsUpdatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestsUpdatedMessage" as const;
    this._isInitialized = true;
  }
}
