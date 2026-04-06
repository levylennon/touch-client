/**
 * PrismsListRegisterMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PrismsListRegisterMessageType = "PrismsListRegisterMessage" as const;

export interface PrismsListRegisterPayload {
  listen?: unknown;
}

export class PrismsListRegisterSend implements PrismsListRegisterPayload {
  _messageType = "PrismsListRegisterMessage" as const;
  listen?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismsListRegisterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismsListRegisterMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PrismsListRegisterPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PrismsListRegisterPayload;
  }
}
