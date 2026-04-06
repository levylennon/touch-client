/**
 * CompassResetMessage — inferred from .on("CompassResetMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CompassResetEventName = "CompassResetMessage" as const;

export interface CompassResetPayload {
  type?: unknown;
}

export class CompassResetReceive implements CompassResetPayload {
  _messageType = "CompassResetMessage" as const;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CompassResetPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CompassResetMessage" as const;
    this._isInitialized = true;
  }
}
