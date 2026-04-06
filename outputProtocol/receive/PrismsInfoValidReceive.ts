/**
 * PrismsInfoValidMessage — inferred from .on("PrismsInfoValidMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismsInfoValidEventName = "PrismsInfoValidMessage" as const;

export interface PrismsInfoValidPayload {
  fights?: unknown;
}

export class PrismsInfoValidReceive implements PrismsInfoValidPayload {
  _messageType = "PrismsInfoValidMessage" as const;
  fights?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismsInfoValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismsInfoValidMessage" as const;
    this._isInitialized = true;
  }
}
