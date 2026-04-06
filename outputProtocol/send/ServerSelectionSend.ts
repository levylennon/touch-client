/**
 * ServerSelectionMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ServerSelectionMessageType = "ServerSelectionMessage" as const;

export interface ServerSelectionPayload {
  serverId?: unknown;
}

export class ServerSelectionSend implements ServerSelectionPayload {
  _messageType = "ServerSelectionMessage" as const;
  serverId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServerSelectionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerSelectionMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ServerSelectionPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ServerSelectionPayload;
  }
}
