/**
 * BasicWhoIsMessage — inferred from .on("BasicWhoIsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const BasicWhoIsEventName = "BasicWhoIsMessage" as const;

export interface BasicWhoIsPayload {
  playerName?: unknown;
  playerState?: unknown;
  verbose?: unknown;
}

export class BasicWhoIsReceive implements BasicWhoIsPayload {
  _messageType = "BasicWhoIsMessage" as const;
  playerName?: unknown;
  playerState?: unknown;
  verbose?: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicWhoIsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicWhoIsMessage" as const;
    this._isInitialized = true;
  }
}
