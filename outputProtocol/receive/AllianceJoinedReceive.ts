/**
 * AllianceJoinedMessage — inferred from .on("AllianceJoinedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceJoinedEventName = "AllianceJoinedMessage" as const;

export interface AllianceJoinedPayload {
  allianceInfo?: {
    allianceName?: unknown;
  };
  enabled?: unknown;
}

export class AllianceJoinedReceive implements AllianceJoinedPayload {
  _messageType = "AllianceJoinedMessage" as const;
  allianceInfo?: {
    allianceName?: unknown;
  };
  enabled?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceJoinedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceJoinedMessage" as const;
    this._isInitialized = true;
  }
}
