/**
 * NpcGenericActionFailureMessage — inferred from .on("NpcGenericActionFailureMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NpcGenericActionFailureEventName = "NpcGenericActionFailureMessage" as const;

export interface NpcGenericActionFailurePayload {
  [key: string]: unknown;
}

export class NpcGenericActionFailureReceive implements NpcGenericActionFailurePayload {
  _messageType = "NpcGenericActionFailureMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<NpcGenericActionFailurePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NpcGenericActionFailureMessage" as const;
    this._isInitialized = true;
  }
}
