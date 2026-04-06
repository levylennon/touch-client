/**
 * GuildCharacsUpgradeRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildCharacsUpgradeRequestMessageType = "GuildCharacsUpgradeRequestMessage" as const;

export interface GuildCharacsUpgradeRequestPayload {
  charaTypeTarget?: unknown;
}

export class GuildCharacsUpgradeRequestSend implements GuildCharacsUpgradeRequestPayload {
  _messageType = "GuildCharacsUpgradeRequestMessage" as const;
  charaTypeTarget?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildCharacsUpgradeRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildCharacsUpgradeRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildCharacsUpgradeRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildCharacsUpgradeRequestPayload;
  }
}
