/**
 * PrismFightJoinLeaveRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PrismFightJoinLeaveRequestMessageType = "PrismFightJoinLeaveRequestMessage" as const;

export interface PrismFightJoinLeaveRequestPayload {
  join?: unknown;
  subAreaId?: unknown;
}

export class PrismFightJoinLeaveRequestSend implements PrismFightJoinLeaveRequestPayload {
  _messageType = "PrismFightJoinLeaveRequestMessage" as const;
  join?: unknown;
  subAreaId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightJoinLeaveRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightJoinLeaveRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PrismFightJoinLeaveRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PrismFightJoinLeaveRequestPayload;
  }
}
