/**
 * SpouseGetInformationsMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const SpouseGetInformationsMessageType = "SpouseGetInformationsMessage" as const;

export interface SpouseGetInformationsPayload {
}

export class SpouseGetInformationsSend implements SpouseGetInformationsPayload {
  _messageType = "SpouseGetInformationsMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<SpouseGetInformationsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpouseGetInformationsMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SpouseGetInformationsPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SpouseGetInformationsPayload;
  }
}
