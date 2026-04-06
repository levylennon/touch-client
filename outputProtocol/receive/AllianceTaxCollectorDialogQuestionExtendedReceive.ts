/**
 * AllianceTaxCollectorDialogQuestionExtendedMessage — inferred from .on("AllianceTaxCollectorDialogQuestionExtendedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceTaxCollectorDialogQuestionExtendedEventName = "AllianceTaxCollectorDialogQuestionExtendedMessage" as const;

export interface AllianceTaxCollectorDialogQuestionExtendedPayload {
  [key: string]: unknown;
}

export class AllianceTaxCollectorDialogQuestionExtendedReceive implements AllianceTaxCollectorDialogQuestionExtendedPayload {
  _messageType = "AllianceTaxCollectorDialogQuestionExtendedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceTaxCollectorDialogQuestionExtendedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceTaxCollectorDialogQuestionExtendedMessage" as const;
    this._isInitialized = true;
  }
}
