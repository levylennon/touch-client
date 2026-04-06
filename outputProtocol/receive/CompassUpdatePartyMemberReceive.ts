/**
 * CompassUpdatePartyMemberMessage — inferred from .on("CompassUpdatePartyMemberMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CompassUpdatePartyMemberEventName = "CompassUpdatePartyMemberMessage" as const;

export interface CompassUpdatePartyMemberPayload {
  [key: string]: unknown;
}

export class CompassUpdatePartyMemberReceive implements CompassUpdatePartyMemberPayload {
  _messageType = "CompassUpdatePartyMemberMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CompassUpdatePartyMemberPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CompassUpdatePartyMemberMessage" as const;
    this._isInitialized = true;
  }
}
