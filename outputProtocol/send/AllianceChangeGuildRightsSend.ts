/**
 * AllianceChangeGuildRightsMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AllianceChangeGuildRightsMessageType = "AllianceChangeGuildRightsMessage" as const;

export interface AllianceChangeGuildRightsPayload {
  guildId?: unknown;
  rights?: unknown;
}

export class AllianceChangeGuildRightsSend implements AllianceChangeGuildRightsPayload {
  _messageType = "AllianceChangeGuildRightsMessage" as const;
  guildId?: unknown;
  rights?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceChangeGuildRightsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceChangeGuildRightsMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AllianceChangeGuildRightsPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AllianceChangeGuildRightsPayload;
  }
}
