/**
 * UpdateMapPlayersAgressableStatusMessage — inferred from .on("UpdateMapPlayersAgressableStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const UpdateMapPlayersAgressableStatusEventName = "UpdateMapPlayersAgressableStatusMessage" as const;

export interface UpdateMapPlayersAgressableStatusPayload {
  enable?: unknown;
  playerIds?: unknown;
}

export class UpdateMapPlayersAgressableStatusReceive implements UpdateMapPlayersAgressableStatusPayload {
  _messageType = "UpdateMapPlayersAgressableStatusMessage" as const;
  enable?: unknown;
  playerIds?: unknown;
  _isInitialized = false;

  constructor(data: Partial<UpdateMapPlayersAgressableStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "UpdateMapPlayersAgressableStatusMessage" as const;
    this._isInitialized = true;
  }
}
