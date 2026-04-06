/**
 * TextInformationMessage — inferred from .on("TextInformationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TextInformationEventName = "TextInformationMessage" as const;

export interface TextInformationPayload {
  msgId?: unknown;
  msgType?: unknown;
  parameters?: unknown;
  text?: unknown;
}

export class TextInformationReceive implements TextInformationPayload {
  _messageType = "TextInformationMessage" as const;
  msgId?: unknown;
  msgType?: unknown;
  parameters?: unknown;
  text?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TextInformationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TextInformationMessage" as const;
    this._isInitialized = true;
  }
}
