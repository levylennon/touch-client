/**
 * HouseGuildNoneMessage — inferred from .on("HouseGuildNoneMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HouseGuildNoneEventName = "HouseGuildNoneMessage" as const;

export interface HouseGuildNonePayload {
  [key: string]: unknown;
}

export class HouseGuildNoneReceive implements HouseGuildNonePayload {
  _messageType = "HouseGuildNoneMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseGuildNonePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseGuildNoneMessage" as const;
    this._isInitialized = true;
  }
}
