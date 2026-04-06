/**
 * MatchmakingCancelRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MatchmakingCancelRequestMessageType = "MatchmakingCancelRequestMessage" as const;

export interface MatchmakingCancelRequestPayload {
  matchmakingFeature?: unknown;
}

export class MatchmakingCancelRequestSend implements MatchmakingCancelRequestPayload {
  _messageType = "MatchmakingCancelRequestMessage" as const;
  matchmakingFeature?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingCancelRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingCancelRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MatchmakingCancelRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MatchmakingCancelRequestPayload;
  }
}
