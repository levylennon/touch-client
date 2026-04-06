/**
 * MatchmakingUpdateRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MatchmakingUpdateRequestMessageType = "MatchmakingUpdateRequestMessage" as const;

export interface MatchmakingUpdateRequestPayload {
  matchmakingData?: Record<string, unknown>;
  matchmakingFeature?: unknown;
}

export class MatchmakingUpdateRequestSend implements MatchmakingUpdateRequestPayload {
  _messageType = "MatchmakingUpdateRequestMessage" as const;
  matchmakingData?: Record<string, unknown>;
  matchmakingFeature?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingUpdateRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingUpdateRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MatchmakingUpdateRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MatchmakingUpdateRequestPayload;
  }
}
