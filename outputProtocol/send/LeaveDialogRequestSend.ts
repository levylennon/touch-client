/**
 * LeaveDialogRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: pass null as the second argument to sendMessage.
 */

export const LeaveDialogRequestMessageType = "LeaveDialogRequestMessage" as const;

export interface LeaveDialogRequestPayload {
}

export class LeaveDialogRequestSend implements LeaveDialogRequestPayload {
  _messageType = "LeaveDialogRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<LeaveDialogRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LeaveDialogRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): LeaveDialogRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as LeaveDialogRequestPayload;
  }
}
