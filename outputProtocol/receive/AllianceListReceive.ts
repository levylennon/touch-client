/**
 * AllianceListMessage — inferred from .on("AllianceListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceListEventName = "AllianceListMessage" as const;

export interface AllianceListPayload {
  alliances?: unknown;
  truncated?: unknown;
}

export class AllianceListReceive implements AllianceListPayload {
  _messageType = "AllianceListMessage" as const;
  alliances?: unknown;
  truncated?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceListMessage" as const;
    this._isInitialized = true;
  }
}
