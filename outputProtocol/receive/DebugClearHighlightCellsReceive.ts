/**
 * DebugClearHighlightCellsMessage — inferred from .on("DebugClearHighlightCellsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DebugClearHighlightCellsEventName = "DebugClearHighlightCellsMessage" as const;

export interface DebugClearHighlightCellsPayload {
  [key: string]: unknown;
}

export class DebugClearHighlightCellsReceive implements DebugClearHighlightCellsPayload {
  _messageType = "DebugClearHighlightCellsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<DebugClearHighlightCellsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DebugClearHighlightCellsMessage" as const;
    this._isInitialized = true;
  }
}
