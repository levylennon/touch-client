/**
 * InteractiveUseRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * Payload may include fields not listed here.
 */

export const InteractiveUseRequestMessageType = "InteractiveUseRequestMessage" as const;

export interface InteractiveUseRequestPayload {
  elemId?: unknown;
  skillInstanceUid?: unknown;
  [key: string]: unknown;
}

export class InteractiveUseRequestSend implements InteractiveUseRequestPayload {
  _messageType = "InteractiveUseRequestMessage" as const;
  elemId?: unknown;
  skillInstanceUid?: unknown;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<InteractiveUseRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InteractiveUseRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): InteractiveUseRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as InteractiveUseRequestPayload;
  }
}
