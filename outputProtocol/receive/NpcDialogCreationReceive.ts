/**
 * NpcDialogCreationMessage — inferred from .on("NpcDialogCreationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NpcDialogCreationEventName = "NpcDialogCreationMessage" as const;

export interface NpcDialogCreationPayload {
  npcId?: unknown;
}

export class NpcDialogCreationReceive implements NpcDialogCreationPayload {
  _messageType = "NpcDialogCreationMessage" as const;
  npcId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NpcDialogCreationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NpcDialogCreationMessage" as const;
    this._isInitialized = true;
  }
}
