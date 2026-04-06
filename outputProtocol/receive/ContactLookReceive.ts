/**
 * ContactLookMessage — inferred from .on("ContactLookMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ContactLookEventName = "ContactLookMessage" as const;

export interface ContactLookPayload {
  look?: unknown;
}

export class ContactLookReceive implements ContactLookPayload {
  _messageType = "ContactLookMessage" as const;
  look?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ContactLookPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ContactLookMessage" as const;
    this._isInitialized = true;
  }
}
