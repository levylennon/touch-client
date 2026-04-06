/**
 * SlaveSwitchContextMessage — inferred from .on("SlaveSwitchContextMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SlaveSwitchContextEventName = "SlaveSwitchContextMessage" as const;

export interface SlaveSwitchContextPayload {
  slaveId?: unknown;
  slaveSpells?: {
    length?: unknown;
  };
  slaveStats?: unknown;
  summonerId?: unknown;
}

export class SlaveSwitchContextReceive implements SlaveSwitchContextPayload {
  _messageType = "SlaveSwitchContextMessage" as const;
  slaveId?: unknown;
  slaveSpells?: {
    length?: unknown;
  };
  slaveStats?: unknown;
  summonerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SlaveSwitchContextPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SlaveSwitchContextMessage" as const;
    this._isInitialized = true;
  }
}
