/**
 * ClientUIOpenedMessage — inferred from .on("ClientUIOpenedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ClientUIOpenedEventName = "ClientUIOpenedMessage" as const;

export interface ClientUIOpenedPayload {
  type?: unknown;
}

export class ClientUIOpenedReceive implements ClientUIOpenedPayload {
  _messageType = "ClientUIOpenedMessage" as const;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ClientUIOpenedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ClientUIOpenedMessage" as const;
    this._isInitialized = true;
  }
}
