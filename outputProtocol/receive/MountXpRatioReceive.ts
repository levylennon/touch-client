/**
 * MountXpRatioMessage — inferred from .on("MountXpRatioMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountXpRatioEventName = "MountXpRatioMessage" as const;

export interface MountXpRatioPayload {
  ratio?: unknown;
}

export class MountXpRatioReceive implements MountXpRatioPayload {
  _messageType = "MountXpRatioMessage" as const;
  ratio?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountXpRatioPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountXpRatioMessage" as const;
    this._isInitialized = true;
  }
}
