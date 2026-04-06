/**
 * SystemMessageDisplayMessage — inferred from .on("SystemMessageDisplayMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SystemMessageDisplayEventName = "SystemMessageDisplayMessage" as const;

export interface SystemMessageDisplayPayload {
  hangUp?: unknown;
  text?: unknown;
  title?: unknown;
}

export class SystemMessageDisplayReceive implements SystemMessageDisplayPayload {
  _messageType = "SystemMessageDisplayMessage" as const;
  hangUp?: unknown;
  text?: unknown;
  title?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SystemMessageDisplayPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SystemMessageDisplayMessage" as const;
    this._isInitialized = true;
  }
}
