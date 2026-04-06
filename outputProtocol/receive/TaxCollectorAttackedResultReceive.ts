/**
 * TaxCollectorAttackedResultMessage — inferred from .on("TaxCollectorAttackedResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorAttackedResultEventName = "TaxCollectorAttackedResultMessage" as const;

export interface TaxCollectorAttackedResultPayload {
  basicInfos?: unknown;
  deadOrAlive?: unknown;
  guild?: {
    guildName?: unknown;
  };
}

export class TaxCollectorAttackedResultReceive implements TaxCollectorAttackedResultPayload {
  _messageType = "TaxCollectorAttackedResultMessage" as const;
  basicInfos?: unknown;
  deadOrAlive?: unknown;
  guild?: {
    guildName?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorAttackedResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorAttackedResultMessage" as const;
    this._isInitialized = true;
  }
}
