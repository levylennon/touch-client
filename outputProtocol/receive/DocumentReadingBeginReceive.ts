/**
 * DocumentReadingBeginMessage — inferred from .on("DocumentReadingBeginMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DocumentReadingBeginEventName = "DocumentReadingBeginMessage" as const;

export interface DocumentReadingBeginPayload {
  [key: string]: unknown;
}

export class DocumentReadingBeginReceive implements DocumentReadingBeginPayload {
  _messageType = "DocumentReadingBeginMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<DocumentReadingBeginPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DocumentReadingBeginMessage" as const;
    this._isInitialized = true;
  }
}
