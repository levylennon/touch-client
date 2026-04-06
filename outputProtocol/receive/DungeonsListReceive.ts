/**
 * DungeonsListMessage — inferred from .on("DungeonsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DungeonsListEventName = "DungeonsListMessage" as const;

export interface DungeonsListPayload {
  _enrichData?: {
    dungeons?: unknown;
  };
  classifications?: {
    length?: unknown;
  };
  dungeonId?: unknown;
}

export class DungeonsListReceive implements DungeonsListPayload {
  _messageType = "DungeonsListMessage" as const;
  _enrichData?: {
    dungeons?: unknown;
  };
  classifications?: {
    length?: unknown;
  };
  dungeonId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<DungeonsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DungeonsListMessage" as const;
    this._isInitialized = true;
  }
}
