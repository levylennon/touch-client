/**
 * InventoryPresetDeleteMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const InventoryPresetDeleteMessageType = "InventoryPresetDeleteMessage" as const;

export interface InventoryPresetDeletePayload {
  presetId?: unknown;
}

export class InventoryPresetDeleteSend implements InventoryPresetDeletePayload {
  _messageType = "InventoryPresetDeleteMessage" as const;
  presetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetDeletePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetDeleteMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): InventoryPresetDeletePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as InventoryPresetDeletePayload;
  }
}
