/**
 * PlayerFightActiveRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const PlayerFightActiveRequestMessageType = "PlayerFightActiveRequestMessage" as const;

export interface PlayerFightActiveRequestPayload {
}

export class PlayerFightActiveRequestSend implements PlayerFightActiveRequestPayload {
  _messageType = "PlayerFightActiveRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<PlayerFightActiveRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PlayerFightActiveRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PlayerFightActiveRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PlayerFightActiveRequestPayload;
  }
}
