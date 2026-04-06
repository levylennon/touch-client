/**
 * ZaapOpenDialogRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const ZaapOpenDialogRequestMessageType = "ZaapOpenDialogRequestMessage" as const;

export interface ZaapOpenDialogRequestPayload {
}

export class ZaapOpenDialogRequestSend implements ZaapOpenDialogRequestPayload {
  _messageType = "ZaapOpenDialogRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<ZaapOpenDialogRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ZaapOpenDialogRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ZaapOpenDialogRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ZaapOpenDialogRequestPayload;
  }
}
