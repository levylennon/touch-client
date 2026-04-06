/**
 * ExchangeSetCraftRecipeMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeSetCraftRecipeMessageType = "ExchangeSetCraftRecipeMessage" as const;

export interface ExchangeSetCraftRecipePayload {
  objectGID?: unknown;
}

export class ExchangeSetCraftRecipeSend implements ExchangeSetCraftRecipePayload {
  _messageType = "ExchangeSetCraftRecipeMessage" as const;
  objectGID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeSetCraftRecipePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeSetCraftRecipeMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeSetCraftRecipePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeSetCraftRecipePayload;
  }
}
