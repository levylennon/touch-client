/**
 * TaxCollectorDialogQuestionBasicMessage — inferred from .on("TaxCollectorDialogQuestionBasicMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorDialogQuestionBasicEventName = "TaxCollectorDialogQuestionBasicMessage" as const;

export interface TaxCollectorDialogQuestionBasicPayload {
  [key: string]: unknown;
}

export class TaxCollectorDialogQuestionBasicReceive implements TaxCollectorDialogQuestionBasicPayload {
  _messageType = "TaxCollectorDialogQuestionBasicMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorDialogQuestionBasicPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorDialogQuestionBasicMessage" as const;
    this._isInitialized = true;
  }
}
