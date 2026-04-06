/**
 * ServerOptionalFeaturesMessage — inferred from .on("ServerOptionalFeaturesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerOptionalFeaturesEventName = "ServerOptionalFeaturesMessage" as const;

export interface ServerOptionalFeaturesPayload {
  features?: {
    length?: unknown;
  };
}

export class ServerOptionalFeaturesReceive implements ServerOptionalFeaturesPayload {
  _messageType = "ServerOptionalFeaturesMessage" as const;
  features?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ServerOptionalFeaturesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerOptionalFeaturesMessage" as const;
    this._isInitialized = true;
  }
}
