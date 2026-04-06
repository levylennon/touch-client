/**
 * StopToListenRunningFightRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const StopToListenRunningFightRequestMessageType = "StopToListenRunningFightRequestMessage" as const;

export interface StopToListenRunningFightRequestPayload {
}

export class StopToListenRunningFightRequestSend implements StopToListenRunningFightRequestPayload {
  _messageType = "StopToListenRunningFightRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<StopToListenRunningFightRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StopToListenRunningFightRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): StopToListenRunningFightRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as StopToListenRunningFightRequestPayload;
  }
}
