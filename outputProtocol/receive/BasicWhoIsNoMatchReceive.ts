/**
 * BasicWhoIsNoMatchMessage — inferred from .on("BasicWhoIsNoMatchMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const BasicWhoIsNoMatchEventName = "BasicWhoIsNoMatchMessage" as const;

export interface BasicWhoIsNoMatchPayload {
  search?: unknown;
}

export class BasicWhoIsNoMatchReceive implements BasicWhoIsNoMatchPayload {
  _messageType = "BasicWhoIsNoMatchMessage" as const;
  search?: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicWhoIsNoMatchPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicWhoIsNoMatchMessage" as const;
    this._isInitialized = true;
  }
}
