/**
 * MimicryObjectPreviewMessage — inferred from .on("MimicryObjectPreviewMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MimicryObjectPreviewEventName = "MimicryObjectPreviewMessage" as const;

export interface MimicryObjectPreviewPayload {
  result?: unknown;
}

export class MimicryObjectPreviewReceive implements MimicryObjectPreviewPayload {
  _messageType = "MimicryObjectPreviewMessage" as const;
  result?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MimicryObjectPreviewPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MimicryObjectPreviewMessage" as const;
    this._isInitialized = true;
  }
}
