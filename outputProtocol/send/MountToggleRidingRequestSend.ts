/**
 * MountToggleRidingRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const MountToggleRidingRequestMessageType = "MountToggleRidingRequestMessage" as const;

export interface MountToggleRidingRequestPayload {
}

export class MountToggleRidingRequestSend implements MountToggleRidingRequestPayload {
  _messageType = "MountToggleRidingRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<MountToggleRidingRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountToggleRidingRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MountToggleRidingRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MountToggleRidingRequestPayload;
  }
}
