/**
 * DebugHighlightCellsMessage — inferred from .on("DebugHighlightCellsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DebugHighlightCellsEventName = "DebugHighlightCellsMessage" as const;

export interface DebugHighlightCellsPayload {
  cells?: {
    length?: unknown;
  };
}

export class DebugHighlightCellsReceive implements DebugHighlightCellsPayload {
  _messageType = "DebugHighlightCellsMessage" as const;
  cells?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<DebugHighlightCellsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DebugHighlightCellsMessage" as const;
    this._isInitialized = true;
  }
}
