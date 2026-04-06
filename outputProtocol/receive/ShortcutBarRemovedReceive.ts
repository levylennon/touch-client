/**
 * ShortcutBarRemovedMessage — inferred from .on("ShortcutBarRemovedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ShortcutBarRemovedEventName = "ShortcutBarRemovedMessage" as const;

export interface ShortcutBarRemovedPayload {
  barType?: unknown;
  slot?: unknown;
}

export class ShortcutBarRemovedReceive implements ShortcutBarRemovedPayload {
  _messageType = "ShortcutBarRemovedMessage" as const;
  barType?: unknown;
  slot?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ShortcutBarRemovedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShortcutBarRemovedMessage" as const;
    this._isInitialized = true;
  }
}
