/**
 * ShortcutBarSwapRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ShortcutBarSwapRequestMessageType = "ShortcutBarSwapRequestMessage" as const;

export interface ShortcutBarSwapRequestPayload {
  barType?: unknown;
  firstSlot?: unknown;
  secondSlot?: unknown;
}

export class ShortcutBarSwapRequestSend implements ShortcutBarSwapRequestPayload {
  _messageType = "ShortcutBarSwapRequestMessage" as const;
  barType?: unknown;
  firstSlot?: unknown;
  secondSlot?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ShortcutBarSwapRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShortcutBarSwapRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ShortcutBarSwapRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ShortcutBarSwapRequestPayload;
  }
}
