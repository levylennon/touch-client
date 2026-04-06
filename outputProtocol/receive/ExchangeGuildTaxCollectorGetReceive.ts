/**
 * ExchangeGuildTaxCollectorGetMessage — inferred from .on("ExchangeGuildTaxCollectorGetMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeGuildTaxCollectorGetEventName = "ExchangeGuildTaxCollectorGetMessage" as const;

export interface ExchangeGuildTaxCollectorGetPayload {
  enrichData?: unknown;
  experience?: unknown;
  objectsInfos?: unknown;
  userName?: unknown;
  worldX?: unknown;
  worldY?: unknown;
}

export class ExchangeGuildTaxCollectorGetReceive implements ExchangeGuildTaxCollectorGetPayload {
  _messageType = "ExchangeGuildTaxCollectorGetMessage" as const;
  enrichData?: unknown;
  experience?: unknown;
  objectsInfos?: unknown;
  userName?: unknown;
  worldX?: unknown;
  worldY?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeGuildTaxCollectorGetPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeGuildTaxCollectorGetMessage" as const;
    this._isInitialized = true;
  }
}
