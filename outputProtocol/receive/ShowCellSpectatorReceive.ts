/**
 * ShowCellSpectatorMessage — inferred from .on("ShowCellSpectatorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ShowCellSpectatorEventName = "ShowCellSpectatorMessage" as const;

export interface ShowCellSpectatorPayload {
  cells?: {
    length?: unknown;
  };
}

export class ShowCellSpectatorReceive implements ShowCellSpectatorPayload {
  _messageType = "ShowCellSpectatorMessage" as const;
  cells?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ShowCellSpectatorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShowCellSpectatorMessage" as const;
    this._isInitialized = true;
  }
}
