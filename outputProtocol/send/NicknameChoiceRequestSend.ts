/**
 * NicknameChoiceRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const NicknameChoiceRequestMessageType = "NicknameChoiceRequestMessage" as const;

export interface NicknameChoiceRequestPayload {
  nickname?: unknown;
}

export class NicknameChoiceRequestSend implements NicknameChoiceRequestPayload {
  _messageType = "NicknameChoiceRequestMessage" as const;
  nickname?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NicknameChoiceRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NicknameChoiceRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): NicknameChoiceRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as NicknameChoiceRequestPayload;
  }
}
