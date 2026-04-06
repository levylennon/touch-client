/**
 * TaxCollectorDialogQuestionExtendedMessage — inferred from .on("TaxCollectorDialogQuestionExtendedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorDialogQuestionExtendedEventName = "TaxCollectorDialogQuestionExtendedMessage" as const;

export interface TaxCollectorDialogQuestionExtendedPayload {
  [key: string]: unknown;
}

export class TaxCollectorDialogQuestionExtendedReceive implements TaxCollectorDialogQuestionExtendedPayload {
  _messageType = "TaxCollectorDialogQuestionExtendedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorDialogQuestionExtendedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorDialogQuestionExtendedMessage" as const;
    this._isInitialized = true;
  }
}
