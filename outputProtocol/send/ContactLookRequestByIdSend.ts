/**
 * ContactLookRequestByIdMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ContactLookRequestByIdMessageType = "ContactLookRequestByIdMessage" as const;

export interface ContactLookRequestByIdPayload {
  contactType?: unknown;
  playerId?: unknown;
}

export class ContactLookRequestByIdSend implements ContactLookRequestByIdPayload {
  _messageType = "ContactLookRequestByIdMessage" as const;
  contactType?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ContactLookRequestByIdPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ContactLookRequestByIdMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ContactLookRequestByIdPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ContactLookRequestByIdPayload;
  }
}
