/**
 * MatchmakingAcceptRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MatchmakingAcceptRequestMessageType = "MatchmakingAcceptRequestMessage" as const;

export interface MatchmakingAcceptRequestPayload {
  accepted?: unknown;
  matchmakingFeature?: unknown;
}

export class MatchmakingAcceptRequestSend implements MatchmakingAcceptRequestPayload {
  _messageType = "MatchmakingAcceptRequestMessage" as const;
  accepted?: unknown;
  matchmakingFeature?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingAcceptRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingAcceptRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MatchmakingAcceptRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MatchmakingAcceptRequestPayload;
  }
}
