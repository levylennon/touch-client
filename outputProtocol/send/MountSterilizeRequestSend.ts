/**
 * MountSterilizeRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const MountSterilizeRequestMessageType = "MountSterilizeRequestMessage" as const;

export interface MountSterilizeRequestPayload {
}

export class MountSterilizeRequestSend implements MountSterilizeRequestPayload {
  _messageType = "MountSterilizeRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<MountSterilizeRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountSterilizeRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MountSterilizeRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MountSterilizeRequestPayload;
  }
}
