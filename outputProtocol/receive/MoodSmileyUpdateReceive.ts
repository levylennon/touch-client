/**
 * MoodSmileyUpdateMessage — inferred from .on("MoodSmileyUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MoodSmileyUpdateEventName = "MoodSmileyUpdateMessage" as const;

export interface MoodSmileyUpdatePayload {
  accountId?: unknown;
  playerId?: unknown;
  smileyId?: unknown;
}

export class MoodSmileyUpdateReceive implements MoodSmileyUpdatePayload {
  _messageType = "MoodSmileyUpdateMessage" as const;
  accountId?: unknown;
  playerId?: unknown;
  smileyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MoodSmileyUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MoodSmileyUpdateMessage" as const;
    this._isInitialized = true;
  }
}
