/**
 * HousePropertiesMessage — inferred from .on("HousePropertiesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HousePropertiesEventName = "HousePropertiesMessage" as const;

export interface HousePropertiesPayload {
  properties?: unknown;
}

export class HousePropertiesReceive implements HousePropertiesPayload {
  _messageType = "HousePropertiesMessage" as const;
  properties?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HousePropertiesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HousePropertiesMessage" as const;
    this._isInitialized = true;
  }
}
