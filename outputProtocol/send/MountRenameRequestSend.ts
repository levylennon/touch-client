/**
 * MountRenameRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MountRenameRequestMessageType = "MountRenameRequestMessage" as const;

export interface MountRenameRequestPayload {
  mountId?: unknown;
  name?: unknown;
}

export class MountRenameRequestSend implements MountRenameRequestPayload {
  _messageType = "MountRenameRequestMessage" as const;
  mountId?: unknown;
  name?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountRenameRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountRenameRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MountRenameRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MountRenameRequestPayload;
  }
}
