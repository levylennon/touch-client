/**
 * PlayerFightInactiveMessage — inferred from .on("PlayerFightInactiveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PlayerFightInactiveEventName = "PlayerFightInactiveMessage" as const;

export interface PlayerFightInactivePayload {
  [key: string]: unknown;
}

export class PlayerFightInactiveReceive implements PlayerFightInactivePayload {
  _messageType = "PlayerFightInactiveMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<PlayerFightInactivePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PlayerFightInactiveMessage" as const;
    this._isInitialized = true;
  }
}
