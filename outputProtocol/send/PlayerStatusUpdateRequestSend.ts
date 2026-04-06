/**
 * PlayerStatusUpdateRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PlayerStatusUpdateRequestMessageType = "PlayerStatusUpdateRequestMessage" as const;

export interface PlayerStatusUpdateRequestPayload {
  status?: Record<string, unknown>;
}

export class PlayerStatusUpdateRequestSend implements PlayerStatusUpdateRequestPayload {
  _messageType = "PlayerStatusUpdateRequestMessage" as const;
  status?: Record<string, unknown>;
  _isInitialized = false;

  constructor(data: Partial<PlayerStatusUpdateRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PlayerStatusUpdateRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PlayerStatusUpdateRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PlayerStatusUpdateRequestPayload;
  }
}
