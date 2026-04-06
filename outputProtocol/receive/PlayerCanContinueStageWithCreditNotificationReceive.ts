/**
 * PlayerCanContinueStageWithCreditNotificationMessage — inferred from .on("PlayerCanContinueStageWithCreditNotificationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PlayerCanContinueStageWithCreditNotificationEventName = "PlayerCanContinueStageWithCreditNotificationMessage" as const;

export interface PlayerCanContinueStageWithCreditNotificationPayload {
  stepNumber?: unknown;
}

export class PlayerCanContinueStageWithCreditNotificationReceive implements PlayerCanContinueStageWithCreditNotificationPayload {
  _messageType = "PlayerCanContinueStageWithCreditNotificationMessage" as const;
  stepNumber?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PlayerCanContinueStageWithCreditNotificationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PlayerCanContinueStageWithCreditNotificationMessage" as const;
    this._isInitialized = true;
  }
}
