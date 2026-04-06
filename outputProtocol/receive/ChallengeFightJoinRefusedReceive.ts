/**
 * ChallengeFightJoinRefusedMessage — inferred from .on("ChallengeFightJoinRefusedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeFightJoinRefusedEventName = "ChallengeFightJoinRefusedMessage" as const;

export interface ChallengeFightJoinRefusedPayload {
  reason?: unknown;
}

export class ChallengeFightJoinRefusedReceive implements ChallengeFightJoinRefusedPayload {
  _messageType = "ChallengeFightJoinRefusedMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeFightJoinRefusedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeFightJoinRefusedMessage" as const;
    this._isInitialized = true;
  }
}
