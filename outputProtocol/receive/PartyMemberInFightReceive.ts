/**
 * PartyMemberInFightMessage — inferred from .on("PartyMemberInFightMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyMemberInFightEventName = "PartyMemberInFightMessage" as const;

export interface PartyMemberInFightPayload {
  fightId?: unknown;
  fightMap?: {
    mapId?: unknown;
  };
  memberId?: unknown;
  memberName?: unknown;
  reason?: unknown;
  secondsBeforeFightStart?: unknown;
}

export class PartyMemberInFightReceive implements PartyMemberInFightPayload {
  _messageType = "PartyMemberInFightMessage" as const;
  fightId?: unknown;
  fightMap?: {
    mapId?: unknown;
  };
  memberId?: unknown;
  memberName?: unknown;
  reason?: unknown;
  secondsBeforeFightStart?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyMemberInFightPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyMemberInFightMessage" as const;
    this._isInitialized = true;
  }
}
