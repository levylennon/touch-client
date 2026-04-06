/**
 * EntityTalkMessage — inferred from .on("EntityTalkMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const EntityTalkEventName = "EntityTalkMessage" as const;

export interface EntityTalkPayload {
  entityId?: unknown;
  text?: unknown;
}

export class EntityTalkReceive implements EntityTalkPayload {
  _messageType = "EntityTalkMessage" as const;
  entityId?: unknown;
  text?: unknown;
  _isInitialized = false;

  constructor(data: Partial<EntityTalkPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EntityTalkMessage" as const;
    this._isInitialized = true;
  }
}
