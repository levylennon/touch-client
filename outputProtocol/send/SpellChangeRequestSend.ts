/**
 * SpellChangeRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const SpellChangeRequestMessageType = "SpellChangeRequestMessage" as const;

export interface SpellChangeRequestPayload {
  spells?: unknown;
}

export class SpellChangeRequestSend implements SpellChangeRequestPayload {
  _messageType = "SpellChangeRequestMessage" as const;
  spells?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SpellChangeRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpellChangeRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): SpellChangeRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as SpellChangeRequestPayload;
  }
}
