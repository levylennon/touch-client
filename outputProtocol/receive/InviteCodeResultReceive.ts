/**
 * InviteCodeResultMessage — inferred from .on("InviteCodeResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InviteCodeResultEventName = "InviteCodeResultMessage" as const;

export interface InviteCodeResultPayload {
  inviteCode?: unknown;
}

export class InviteCodeResultReceive implements InviteCodeResultPayload {
  _messageType = "InviteCodeResultMessage" as const;
  inviteCode?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InviteCodeResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InviteCodeResultMessage" as const;
    this._isInitialized = true;
  }
}
