/**
 * AlliancePrismDialogQuestionMessage — inferred from .on("AlliancePrismDialogQuestionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AlliancePrismDialogQuestionEventName = "AlliancePrismDialogQuestionMessage" as const;

export interface AlliancePrismDialogQuestionPayload {
  [key: string]: unknown;
}

export class AlliancePrismDialogQuestionReceive implements AlliancePrismDialogQuestionPayload {
  _messageType = "AlliancePrismDialogQuestionMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AlliancePrismDialogQuestionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AlliancePrismDialogQuestionMessage" as const;
    this._isInitialized = true;
  }
}
