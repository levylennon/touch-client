/**
 * SocialInfoEditingRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const SocialInfoEditingRequestMessageType = "SocialInfoEditingRequestMessage" as const;

export interface SocialInfoEditingRequestPayload {
  infoType?: unknown;
}

export class SocialInfoEditingRequestSend implements SocialInfoEditingRequestPayload {
  _messageType = "SocialInfoEditingRequestMessage" as const;
  infoType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SocialInfoEditingRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SocialInfoEditingRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SocialInfoEditingRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SocialInfoEditingRequestPayload;
  }
}
