/**
 * AllianceCreationStartedMessage — inferred from .on("AllianceCreationStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceCreationStartedEventName = "AllianceCreationStartedMessage" as const;

export interface AllianceCreationStartedPayload {
  [key: string]: unknown;
}

export class AllianceCreationStartedReceive implements AllianceCreationStartedPayload {
  _messageType = "AllianceCreationStartedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceCreationStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceCreationStartedMessage" as const;
    this._isInitialized = true;
  }
}
