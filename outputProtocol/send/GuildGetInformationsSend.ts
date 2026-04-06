/**
 * GuildGetInformationsMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildGetInformationsMessageType = "GuildGetInformationsMessage" as const;

export interface GuildGetInformationsPayload {
  infoType?: unknown;
}

export class GuildGetInformationsSend implements GuildGetInformationsPayload {
  _messageType = "GuildGetInformationsMessage" as const;
  infoType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildGetInformationsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildGetInformationsMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildGetInformationsPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildGetInformationsPayload;
  }
}
