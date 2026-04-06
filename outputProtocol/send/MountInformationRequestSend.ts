/**
 * MountInformationRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MountInformationRequestMessageType = "MountInformationRequestMessage" as const;

export interface MountInformationRequestPayload {
  id?: unknown;
  time?: unknown;
}

export class MountInformationRequestSend implements MountInformationRequestPayload {
  _messageType = "MountInformationRequestMessage" as const;
  id?: unknown;
  time?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountInformationRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountInformationRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MountInformationRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MountInformationRequestPayload;
  }
}
