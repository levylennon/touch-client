/**
 * MoodSmileyResultMessage — inferred from .on("MoodSmileyResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MoodSmileyResultEventName = "MoodSmileyResultMessage" as const;

export interface MoodSmileyResultPayload {
  resultCode?: unknown;
  smileyId?: unknown;
}

export class MoodSmileyResultReceive implements MoodSmileyResultPayload {
  _messageType = "MoodSmileyResultMessage" as const;
  resultCode?: unknown;
  smileyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MoodSmileyResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MoodSmileyResultMessage" as const;
    this._isInitialized = true;
  }
}
