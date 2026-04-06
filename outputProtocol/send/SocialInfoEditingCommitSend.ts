/**
 * SocialInfoEditingCommitMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const SocialInfoEditingCommitMessageType = "SocialInfoEditingCommitMessage" as const;

export interface SocialInfoEditingCommitPayload {
  content?: unknown;
  infoType?: unknown;
}

export class SocialInfoEditingCommitSend implements SocialInfoEditingCommitPayload {
  _messageType = "SocialInfoEditingCommitMessage" as const;
  content?: unknown;
  infoType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SocialInfoEditingCommitPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SocialInfoEditingCommitMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SocialInfoEditingCommitPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SocialInfoEditingCommitPayload;
  }
}
