/**
 * ZaapListMessage — inferred from .on("ZaapListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ZaapListEventName = "ZaapListMessage" as const;

export interface ZaapListPayload {
  teleporterType?: unknown;
}

export class ZaapListReceive implements ZaapListPayload {
  _messageType = "ZaapListMessage" as const;
  teleporterType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ZaapListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ZaapListMessage" as const;
    this._isInitialized = true;
  }
}
