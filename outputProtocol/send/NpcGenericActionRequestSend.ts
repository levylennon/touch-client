/**
 * NpcGenericActionRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const NpcGenericActionRequestMessageType = "NpcGenericActionRequestMessage" as const;

export interface NpcGenericActionRequestPayload {
  npcActionId?: unknown | number;
  npcId?: number | unknown;
  npcMapId?: unknown;
}

export class NpcGenericActionRequestSend implements NpcGenericActionRequestPayload {
  _messageType = "NpcGenericActionRequestMessage" as const;
  npcActionId?: unknown | number;
  npcId?: number | unknown;
  npcMapId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NpcGenericActionRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NpcGenericActionRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): NpcGenericActionRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as NpcGenericActionRequestPayload;
  }
}
