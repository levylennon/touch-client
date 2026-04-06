/**
 * AdminCommandMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AdminCommandMessageType = "AdminCommandMessage" as const;

export interface AdminCommandPayload {
  content?: string | unknown;
}

export class AdminCommandSend implements AdminCommandPayload {
  _messageType = "AdminCommandMessage" as const;
  content?: string | unknown;
  _isInitialized = false;

  constructor(data: Partial<AdminCommandPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AdminCommandMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AdminCommandPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AdminCommandPayload;
  }
}
