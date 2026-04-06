/**
 * ChallengeTargetsListRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ChallengeTargetsListRequestMessageType = "ChallengeTargetsListRequestMessage" as const;

export interface ChallengeTargetsListRequestPayload {
  challengeId?: unknown;
}

export class ChallengeTargetsListRequestSend implements ChallengeTargetsListRequestPayload {
  _messageType = "ChallengeTargetsListRequestMessage" as const;
  challengeId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeTargetsListRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeTargetsListRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ChallengeTargetsListRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ChallengeTargetsListRequestPayload;
  }
}
