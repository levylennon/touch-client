/**
 * ChallengeRerollRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const ChallengeRerollRequestMessageType = "ChallengeRerollRequestMessage" as const;

export interface ChallengeRerollRequestPayload {
}

export class ChallengeRerollRequestSend implements ChallengeRerollRequestPayload {
  _messageType = "ChallengeRerollRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<ChallengeRerollRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeRerollRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ChallengeRerollRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ChallengeRerollRequestPayload;
  }
}
