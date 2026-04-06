/**
 * AllianceModificationStartedMessage — inferred from .on("AllianceModificationStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceModificationStartedEventName = "AllianceModificationStartedMessage" as const;

export interface AllianceModificationStartedPayload {
  canChangeEmblem?: unknown;
  canChangeName?: unknown;
  canChangeTag?: unknown;
}

export class AllianceModificationStartedReceive implements AllianceModificationStartedPayload {
  _messageType = "AllianceModificationStartedMessage" as const;
  canChangeEmblem?: unknown;
  canChangeName?: unknown;
  canChangeTag?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceModificationStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceModificationStartedMessage" as const;
    this._isInitialized = true;
  }
}
