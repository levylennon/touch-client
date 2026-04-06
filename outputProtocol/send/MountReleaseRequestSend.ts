/**
 * MountReleaseRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const MountReleaseRequestMessageType = "MountReleaseRequestMessage" as const;

export interface MountReleaseRequestPayload {
}

export class MountReleaseRequestSend implements MountReleaseRequestPayload {
  _messageType = "MountReleaseRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<MountReleaseRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountReleaseRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MountReleaseRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MountReleaseRequestPayload;
  }
}
