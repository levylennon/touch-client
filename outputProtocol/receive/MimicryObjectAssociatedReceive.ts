/**
 * MimicryObjectAssociatedMessage — inferred from .on("MimicryObjectAssociatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MimicryObjectAssociatedEventName = "MimicryObjectAssociatedMessage" as const;

export interface MimicryObjectAssociatedPayload {
  hostUID?: unknown;
}

export class MimicryObjectAssociatedReceive implements MimicryObjectAssociatedPayload {
  _messageType = "MimicryObjectAssociatedMessage" as const;
  hostUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MimicryObjectAssociatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MimicryObjectAssociatedMessage" as const;
    this._isInitialized = true;
  }
}
