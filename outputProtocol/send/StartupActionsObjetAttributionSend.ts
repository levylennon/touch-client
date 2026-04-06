/**
 * StartupActionsObjetAttributionMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const StartupActionsObjetAttributionMessageType = "StartupActionsObjetAttributionMessage" as const;

export interface StartupActionsObjetAttributionPayload {
  actionId?: unknown;
  characterId?: unknown;
}

export class StartupActionsObjetAttributionSend implements StartupActionsObjetAttributionPayload {
  _messageType = "StartupActionsObjetAttributionMessage" as const;
  actionId?: unknown;
  characterId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StartupActionsObjetAttributionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StartupActionsObjetAttributionMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): StartupActionsObjetAttributionPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as StartupActionsObjetAttributionPayload;
  }
}
