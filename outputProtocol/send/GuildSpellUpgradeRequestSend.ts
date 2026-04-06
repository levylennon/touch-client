/**
 * GuildSpellUpgradeRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildSpellUpgradeRequestMessageType = "GuildSpellUpgradeRequestMessage" as const;

export interface GuildSpellUpgradeRequestPayload {
  spellId?: unknown;
}

export class GuildSpellUpgradeRequestSend implements GuildSpellUpgradeRequestPayload {
  _messageType = "GuildSpellUpgradeRequestMessage" as const;
  spellId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildSpellUpgradeRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildSpellUpgradeRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildSpellUpgradeRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildSpellUpgradeRequestPayload;
  }
}
