/**
 * ExchangeCraftInformationObjectMessage — inferred from .on("ExchangeCraftInformationObjectMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeCraftInformationObjectEventName = "ExchangeCraftInformationObjectMessage" as const;

export interface ExchangeCraftInformationObjectPayload {
  craftResult?: unknown;
  playerId?: unknown;
}

export class ExchangeCraftInformationObjectReceive implements ExchangeCraftInformationObjectPayload {
  _messageType = "ExchangeCraftInformationObjectMessage" as const;
  craftResult?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeCraftInformationObjectPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeCraftInformationObjectMessage" as const;
    this._isInitialized = true;
  }
}
