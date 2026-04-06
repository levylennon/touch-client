/**
 * MatchmakingCreateRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MatchmakingCreateRequestMessageType = "MatchmakingCreateRequestMessage" as const;

export interface MatchmakingCreateRequestPayload {
  matchmakingData?: Record<string, unknown>;
  matchmakingFeature?: unknown;
}

export class MatchmakingCreateRequestSend implements MatchmakingCreateRequestPayload {
  _messageType = "MatchmakingCreateRequestMessage" as const;
  matchmakingData?: Record<string, unknown>;
  matchmakingFeature?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingCreateRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingCreateRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MatchmakingCreateRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MatchmakingCreateRequestPayload;
  }
}
