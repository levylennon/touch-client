/**
 * SocialInfoEditingCancelMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const SocialInfoEditingCancelMessageType = "SocialInfoEditingCancelMessage" as const;

export interface SocialInfoEditingCancelPayload {
  infoType?: unknown;
}

export class SocialInfoEditingCancelSend implements SocialInfoEditingCancelPayload {
  _messageType = "SocialInfoEditingCancelMessage" as const;
  infoType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SocialInfoEditingCancelPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SocialInfoEditingCancelMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SocialInfoEditingCancelPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SocialInfoEditingCancelPayload;
  }
}
