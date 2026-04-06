/**
 * MountEmoteIconUsedOkMessage — inferred from .on("MountEmoteIconUsedOkMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountEmoteIconUsedOkEventName = "MountEmoteIconUsedOkMessage" as const;

export interface MountEmoteIconUsedOkPayload {
  mountId?: unknown;
  reactionType?: unknown;
}

export class MountEmoteIconUsedOkReceive implements MountEmoteIconUsedOkPayload {
  _messageType = "MountEmoteIconUsedOkMessage" as const;
  mountId?: unknown;
  reactionType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountEmoteIconUsedOkPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountEmoteIconUsedOkMessage" as const;
    this._isInitialized = true;
  }
}
