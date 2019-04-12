export type MaskArray = Array<string | RegExp>;

export type PipeResultObject = { value: string, indexesOfPipedChars: number[] };

export interface TextMaskOptions {
    mask: MaskArray | ((rawValue: string) => MaskArray);
    guide?: boolean;
    placeholderChar?: string;
    keepCharPositions?: boolean;
    showMark?: boolean;
    pipe?: (value: string, config: TextMaskOptions) => string | false | PipeResultObject;
}

export function useTextMask(ref: HTMLInputElement | HTMLTextAreaElement, options: TextMaskOptions): void;