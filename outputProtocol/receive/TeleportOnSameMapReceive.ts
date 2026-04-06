/**
 * TeleportOnSameMapMessage — inferred from .on("TeleportOnSameMapMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TeleportOnSameMapEventName = "TeleportOnSameMapMessage" as const;

export interface TeleportOnSameMapPayload {
  cellId?: unknown;
  targetId?: unknown;
}

export class TeleportOnSameMapReceive implements TeleportOnSameMapPayload {
  _messageType = "TeleportOnSameMapMessage" as const;
  cellId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportOnSameMapPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportOnSameMapMessage" as const;
    this._isInitialized = true;
  }
}
