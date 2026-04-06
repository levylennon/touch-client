/**
 * ClientKeyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ClientKeyMessageType = "ClientKeyMessage" as const;

export interface ClientKeyPayload {
  key?: unknown;
}

export class ClientKeySend implements ClientKeyPayload {
  _messageType = "ClientKeyMessage" as const;
  key?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ClientKeyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ClientKeyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ClientKeyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ClientKeyPayload;
  }
}
