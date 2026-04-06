/**
 * ContinueTowerOfAscensionWithCreditRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ContinueTowerOfAscensionWithCreditRequestMessageType = "ContinueTowerOfAscensionWithCreditRequestMessage" as const;

export interface ContinueTowerOfAscensionWithCreditRequestPayload {
  stepNumber?: unknown;
}

export class ContinueTowerOfAscensionWithCreditRequestSend implements ContinueTowerOfAscensionWithCreditRequestPayload {
  _messageType = "ContinueTowerOfAscensionWithCreditRequestMessage" as const;
  stepNumber?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ContinueTowerOfAscensionWithCreditRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ContinueTowerOfAscensionWithCreditRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ContinueTowerOfAscensionWithCreditRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ContinueTowerOfAscensionWithCreditRequestPayload;
  }
}
