/**
 * TaxCollectorAttackedMessage — inferred from .on("TaxCollectorAttackedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorAttackedEventName = "TaxCollectorAttackedMessage" as const;

export interface TaxCollectorAttackedPayload {
  enrichData?: unknown;
  guild?: {
    guildId?: unknown;
    guildName?: unknown;
  };
  worldX?: unknown;
  worldY?: unknown;
}

export class TaxCollectorAttackedReceive implements TaxCollectorAttackedPayload {
  _messageType = "TaxCollectorAttackedMessage" as const;
  enrichData?: unknown;
  guild?: {
    guildId?: unknown;
    guildName?: unknown;
  };
  worldX?: unknown;
  worldY?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorAttackedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorAttackedMessage" as const;
    this._isInitialized = true;
  }
}
