/**
 * AllianceInsiderInfoMessage — inferred from .on("AllianceInsiderInfoMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceInsiderInfoEventName = "AllianceInsiderInfoMessage" as const;

export interface AllianceInsiderInfoPayload {
  allianceInfos?: unknown;
  guilds?: unknown;
  prisms?: unknown;
}

export class AllianceInsiderInfoReceive implements AllianceInsiderInfoPayload {
  _messageType = "AllianceInsiderInfoMessage" as const;
  allianceInfos?: unknown;
  guilds?: unknown;
  prisms?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceInsiderInfoPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceInsiderInfoMessage" as const;
    this._isInitialized = true;
  }
}
