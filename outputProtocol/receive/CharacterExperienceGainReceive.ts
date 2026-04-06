/**
 * CharacterExperienceGainMessage — inferred from .on("CharacterExperienceGainMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterExperienceGainEventName = "CharacterExperienceGainMessage" as const;

export interface CharacterExperienceGainPayload {
  experienceCharacter?: unknown;
  experienceGuild?: unknown;
  experienceIncarnation?: unknown;
  experienceMount?: unknown;
}

export class CharacterExperienceGainReceive implements CharacterExperienceGainPayload {
  _messageType = "CharacterExperienceGainMessage" as const;
  experienceCharacter?: unknown;
  experienceGuild?: unknown;
  experienceIncarnation?: unknown;
  experienceMount?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterExperienceGainPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterExperienceGainMessage" as const;
    this._isInitialized = true;
  }
}
