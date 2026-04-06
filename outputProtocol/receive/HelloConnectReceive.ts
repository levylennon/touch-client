/**
 * HelloConnectMessage — inferred from .on("HelloConnectMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HelloConnectEventName = "HelloConnectMessage" as const;

export interface HelloConnectPayload {
  [key: string]: unknown;
}

export class HelloConnectReceive implements HelloConnectPayload {
  _messageType = "HelloConnectMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<HelloConnectPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HelloConnectMessage" as const;
    this._isInitialized = true;
  }
}
