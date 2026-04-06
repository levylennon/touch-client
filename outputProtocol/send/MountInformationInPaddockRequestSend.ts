/**
 * MountInformationInPaddockRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MountInformationInPaddockRequestMessageType = "MountInformationInPaddockRequestMessage" as const;

export interface MountInformationInPaddockRequestPayload {
  mapRideId?: unknown;
}

export class MountInformationInPaddockRequestSend implements MountInformationInPaddockRequestPayload {
  _messageType = "MountInformationInPaddockRequestMessage" as const;
  mapRideId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountInformationInPaddockRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountInformationInPaddockRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MountInformationInPaddockRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MountInformationInPaddockRequestPayload;
  }
}
