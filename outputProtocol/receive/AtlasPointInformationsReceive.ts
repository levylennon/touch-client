/**
 * AtlasPointInformationsMessage — inferred from .on("AtlasPointInformationsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AtlasPointInformationsEventName = "AtlasPointInformationsMessage" as const;

export interface AtlasPointInformationsPayload {
  type?: {
    coords?: unknown;
    type?: unknown;
  };
}

export class AtlasPointInformationsReceive implements AtlasPointInformationsPayload {
  _messageType = "AtlasPointInformationsMessage" as const;
  type?: {
    coords?: unknown;
    type?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<AtlasPointInformationsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AtlasPointInformationsMessage" as const;
    this._isInitialized = true;
  }
}
