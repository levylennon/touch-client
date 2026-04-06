/**
 * AllianceMembershipMessage — inferred from .on("AllianceMembershipMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceMembershipEventName = "AllianceMembershipMessage" as const;

export interface AllianceMembershipPayload {
  allianceInfo?: unknown;
  enabled?: unknown;
}

export class AllianceMembershipReceive implements AllianceMembershipPayload {
  _messageType = "AllianceMembershipMessage" as const;
  allianceInfo?: unknown;
  enabled?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceMembershipPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceMembershipMessage" as const;
    this._isInitialized = true;
  }
}
