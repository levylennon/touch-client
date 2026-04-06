/**
 * AlmanachCalendarDateMessage — inferred from .on("AlmanachCalendarDateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AlmanachCalendarDateEventName = "AlmanachCalendarDateMessage" as const;

export interface AlmanachCalendarDatePayload {
  _merydeName?: unknown;
  date?: unknown;
}

export class AlmanachCalendarDateReceive implements AlmanachCalendarDatePayload {
  _messageType = "AlmanachCalendarDateMessage" as const;
  _merydeName?: unknown;
  date?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AlmanachCalendarDatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AlmanachCalendarDateMessage" as const;
    this._isInitialized = true;
  }
}
