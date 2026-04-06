/**
 * SocialInfoRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const SocialInfoRequestMessageType = "SocialInfoRequestMessage" as const;

export interface SocialInfoRequestPayload {
  infoTypes?: unknown;
}

export class SocialInfoRequestSend implements SocialInfoRequestPayload {
  _messageType = "SocialInfoRequestMessage" as const;
  infoTypes?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SocialInfoRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SocialInfoRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SocialInfoRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SocialInfoRequestPayload;
  }
}
