/**
 * ClientUIOpenedByObjectMessage — inferred from .on("ClientUIOpenedByObjectMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ClientUIOpenedByObjectEventName = "ClientUIOpenedByObjectMessage" as const;

export interface ClientUIOpenedByObjectPayload {
  type?: unknown;
  uid?: unknown;
}

export class ClientUIOpenedByObjectReceive implements ClientUIOpenedByObjectPayload {
  _messageType = "ClientUIOpenedByObjectMessage" as const;
  type?: unknown;
  uid?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ClientUIOpenedByObjectPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ClientUIOpenedByObjectMessage" as const;
    this._isInitialized = true;
  }
}
