/**
 * AllianceGuildLeavingMessage — inferred from .on("AllianceGuildLeavingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceGuildLeavingEventName = "AllianceGuildLeavingMessage" as const;

export interface AllianceGuildLeavingPayload {
  guildId?: unknown;
}

export class AllianceGuildLeavingReceive implements AllianceGuildLeavingPayload {
  _messageType = "AllianceGuildLeavingMessage" as const;
  guildId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceGuildLeavingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceGuildLeavingMessage" as const;
    this._isInitialized = true;
  }
}
