/**
 * TitleSelectRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const TitleSelectRequestMessageType = "TitleSelectRequestMessage" as const;

export interface TitleSelectRequestPayload {
  titleId?: unknown;
}

export class TitleSelectRequestSend implements TitleSelectRequestPayload {
  _messageType = "TitleSelectRequestMessage" as const;
  titleId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TitleSelectRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TitleSelectRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): TitleSelectRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as TitleSelectRequestPayload;
  }
}
