export interface Pointable {
    readonly totalpoint: number;
}
export interface Karmaable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
export interface Karmasable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementspoint: number[];
    remove(): void;
}
export interface Judgeable {
    element: HTMLDivElement;
    readonly resultPoint: number;
    readonly resultPlace: string;
    clickEventHandler(): void;
    displayJudgement(): void;
}