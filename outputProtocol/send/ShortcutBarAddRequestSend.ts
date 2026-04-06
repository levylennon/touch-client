/**
 * ShortcutBarAddRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ShortcutBarAddRequestMessageType = "ShortcutBarAddRequestMessage" as const;

export interface ShortcutBarAddRequestPayload {
  barType?: unknown;
  shortcut?: unknown;
}

export class ShortcutBarAddRequestSend implements ShortcutBarAddRequestPayload {
  _messageType = "ShortcutBarAddRequestMessage" as const;
  barType?: unknown;
  shortcut?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ShortcutBarAddRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShortcutBarAddRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ShortcutBarAddRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ShortcutBarAddRequestPayload;
  }
}
