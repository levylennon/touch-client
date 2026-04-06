/**
 * LockableStateUpdateHouseDoorMessage — inferred from .on("LockableStateUpdateHouseDoorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LockableStateUpdateHouseDoorEventName = "LockableStateUpdateHouseDoorMessage" as const;

export interface LockableStateUpdateHouseDoorPayload {
  houseId?: unknown;
  locked?: unknown;
}

export class LockableStateUpdateHouseDoorReceive implements LockableStateUpdateHouseDoorPayload {
  _messageType = "LockableStateUpdateHouseDoorMessage" as const;
  houseId?: unknown;
  locked?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LockableStateUpdateHouseDoorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LockableStateUpdateHouseDoorMessage" as const;
    this._isInitialized = true;
  }
}
