/**
 * EnabledChannelsMessage — inferred from .on("EnabledChannelsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const EnabledChannelsEventName = "EnabledChannelsMessage" as const;

export interface EnabledChannelsPayload {
  channels?: unknown;
  disallowed?: unknown;
}

export class EnabledChannelsReceive implements EnabledChannelsPayload {
  _messageType = "EnabledChannelsMessage" as const;
  channels?: unknown;
  disallowed?: unknown;
  _isInitialized = false;

  constructor(data: Partial<EnabledChannelsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EnabledChannelsMessage" as const;
    this._isInitialized = true;
  }
}
