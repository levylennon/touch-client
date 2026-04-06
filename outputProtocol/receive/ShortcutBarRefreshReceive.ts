/**
 * ShortcutBarRefreshMessage — inferred from .on("ShortcutBarRefreshMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ShortcutBarRefreshEventName = "ShortcutBarRefreshMessage" as const;

export interface ShortcutBarRefreshPayload {
  barType?: unknown;
  shortcut?: unknown;
}

export class ShortcutBarRefreshReceive implements ShortcutBarRefreshPayload {
  _messageType = "ShortcutBarRefreshMessage" as const;
  barType?: unknown;
  shortcut?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ShortcutBarRefreshPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShortcutBarRefreshMessage" as const;
    this._isInitialized = true;
  }
}
