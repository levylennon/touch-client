/**
 * RealEstatePropertiesMessage — inferred from .on("RealEstatePropertiesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const RealEstatePropertiesEventName = "RealEstatePropertiesMessage" as const;

export interface RealEstatePropertiesPayload {
  farm?: {
    length?: unknown;
  };
  houseId?: unknown;
  houses?: unknown;
  modelId?: unknown;
  ownerName?: unknown;
}

export class RealEstatePropertiesReceive implements RealEstatePropertiesPayload {
  _messageType = "RealEstatePropertiesMessage" as const;
  farm?: {
    length?: unknown;
  };
  houseId?: unknown;
  houses?: unknown;
  modelId?: unknown;
  ownerName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<RealEstatePropertiesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "RealEstatePropertiesMessage" as const;
    this._isInitialized = true;
  }
}
