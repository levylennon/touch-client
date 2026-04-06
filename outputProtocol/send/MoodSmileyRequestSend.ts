/**
 * MoodSmileyRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MoodSmileyRequestMessageType = "MoodSmileyRequestMessage" as const;

export interface MoodSmileyRequestPayload {
  smileyId?: unknown;
}

export class MoodSmileyRequestSend implements MoodSmileyRequestPayload {
  _messageType = "MoodSmileyRequestMessage" as const;
  smileyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MoodSmileyRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MoodSmileyRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MoodSmileyRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MoodSmileyRequestPayload;
  }
}
