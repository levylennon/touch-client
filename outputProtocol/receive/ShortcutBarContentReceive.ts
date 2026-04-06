/**
 * ShortcutBarContentMessage — inferred from .on("ShortcutBarContentMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ShortcutBarContentEventName = "ShortcutBarContentMessage" as const;

export interface ShortcutBarContentPayload {
  barType?: unknown;
  characterId?: unknown;
  shortcuts?: {
    length?: unknown;
  };
}

export class ShortcutBarContentReceive implements ShortcutBarContentPayload {
  _messageType = "ShortcutBarContentMessage" as const;
  barType?: unknown;
  characterId?: unknown;
  shortcuts?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ShortcutBarContentPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShortcutBarContentMessage" as const;
    this._isInitialized = true;
  }
}
