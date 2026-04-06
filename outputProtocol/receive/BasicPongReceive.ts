/**
 * BasicPongMessage — inferred from .on("BasicPongMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const BasicPongEventName = "BasicPongMessage" as const;

export interface BasicPongPayload {
  [key: string]: unknown;
}

export class BasicPongReceive implements BasicPongPayload {
  _messageType = "BasicPongMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicPongPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicPongMessage" as const;
    this._isInitialized = true;
  }
}
