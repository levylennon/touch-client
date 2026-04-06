/**
 * _GameActionFightLeaveMessage — inferred from .on("_GameActionFightLeaveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const _GameActionFightLeaveEventName = "_GameActionFightLeaveMessage" as const;

export interface _GameActionFightLeavePayload {
  targetId?: unknown;
}

export class _GameActionFightLeaveReceive implements _GameActionFightLeavePayload {
  _messageType = "_GameActionFightLeaveMessage" as const;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<_GameActionFightLeavePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "_GameActionFightLeaveMessage" as const;
    this._isInitialized = true;
  }
}
