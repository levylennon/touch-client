/**
 * InventoryPresetUseMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const InventoryPresetUseMessageType = "InventoryPresetUseMessage" as const;

export interface InventoryPresetUsePayload {
  presetId?: unknown;
}

export class InventoryPresetUseSend implements InventoryPresetUsePayload {
  _messageType = "InventoryPresetUseMessage" as const;
  presetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetUsePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetUseMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): InventoryPresetUsePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as InventoryPresetUsePayload;
  }
}
