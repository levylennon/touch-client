/**
 * TeleportDestinationsListMessage — inferred from .on("TeleportDestinationsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TeleportDestinationsListEventName = "TeleportDestinationsListMessage" as const;

export interface TeleportDestinationsListPayload {
  teleporterType?: unknown;
}

export class TeleportDestinationsListReceive implements TeleportDestinationsListPayload {
  _messageType = "TeleportDestinationsListMessage" as const;
  teleporterType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TeleportDestinationsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TeleportDestinationsListMessage" as const;
    this._isInitialized = true;
  }
}
