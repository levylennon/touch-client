/**
 * ChannelEnablingChangeMessage — inferred from .on("ChannelEnablingChangeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChannelEnablingChangeEventName = "ChannelEnablingChangeMessage" as const;

export interface ChannelEnablingChangePayload {
  channel?: unknown;
  enable?: unknown;
}

export class ChannelEnablingChangeReceive implements ChannelEnablingChangePayload {
  _messageType = "ChannelEnablingChangeMessage" as const;
  channel?: unknown;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChannelEnablingChangePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChannelEnablingChangeMessage" as const;
    this._isInitialized = true;
  }
}
