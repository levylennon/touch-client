/**
 * ShowCellMessage — inferred from .on("ShowCellMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ShowCellEventName = "ShowCellMessage" as const;

export interface ShowCellPayload {
  cellId?: unknown;
}

export class ShowCellReceive implements ShowCellPayload {
  _messageType = "ShowCellMessage" as const;
  cellId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ShowCellPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ShowCellMessage" as const;
    this._isInitialized = true;
  }
}
