/**
 * ShortcutBarRemoveRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ShortcutBarRemoveRequestMessageType = "ShortcutBarRemoveRequestMessage" as const;

export interface ShortcutBarRemoveRequestPayload {
  barType?: unknown;
  slot?: unknown;
}

export class ShortcutBarRemoveRequestSend implements ShortcutBarRemoveRequestPayload {
  _messageType = "ShortcutBarRemoveRequestMessage" as const;
  barType?: unknown;
  slot?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ShortcutBarRemoveRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShortcutBarRemoveRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ShortcutBarRemoveRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ShortcutBarRemoveRequestPayload;
  }
}
