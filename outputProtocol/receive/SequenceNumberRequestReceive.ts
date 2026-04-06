/**
 * SequenceNumberRequestMessage — inferred from .on("SequenceNumberRequestMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SequenceNumberRequestEventName = "SequenceNumberRequestMessage" as const;

export interface SequenceNumberRequestPayload {
  [key: string]: unknown;
}

export class SequenceNumberRequestReceive implements SequenceNumberRequestPayload {
  _messageType = "SequenceNumberRequestMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<SequenceNumberRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SequenceNumberRequestMessage" as const;
    this._isInitialized = true;
  }
}
