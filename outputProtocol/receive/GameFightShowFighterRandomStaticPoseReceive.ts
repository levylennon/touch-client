/**
 * GameFightShowFighterRandomStaticPoseMessage — inferred from .on("GameFightShowFighterRandomStaticPoseMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightShowFighterRandomStaticPoseEventName = "GameFightShowFighterRandomStaticPoseMessage" as const;

export interface GameFightShowFighterRandomStaticPosePayload {
  informations?: unknown;
}

export class GameFightShowFighterRandomStaticPoseReceive implements GameFightShowFighterRandomStaticPosePayload {
  _messageType = "GameFightShowFighterRandomStaticPoseMessage" as const;
  informations?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightShowFighterRandomStaticPosePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightShowFighterRandomStaticPoseMessage" as const;
    this._isInitialized = true;
  }
}
