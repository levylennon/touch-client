/**
 * GameDataPlayFarmObjectAnimationMessage — inferred from .on("GameDataPlayFarmObjectAnimationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameDataPlayFarmObjectAnimationEventName = "GameDataPlayFarmObjectAnimationMessage" as const;

export interface GameDataPlayFarmObjectAnimationPayload {
  cellId?: {
    length?: unknown;
  };
}

export class GameDataPlayFarmObjectAnimationReceive implements GameDataPlayFarmObjectAnimationPayload {
  _messageType = "GameDataPlayFarmObjectAnimationMessage" as const;
  cellId?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GameDataPlayFarmObjectAnimationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameDataPlayFarmObjectAnimationMessage" as const;
    this._isInitialized = true;
  }
}
