//Point class
export interface Pointable {
    readonly totalpoint: number;
}
//Karma class
export interface Karmaable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
//Karmas class
export interface Karmasable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementspoint: number[];
    remove(): void;
}
//Judge class
export interface Judgeable {
    element: HTMLDivElement;
    readonly resultPoint: number;
    readonly resultPlace: string;
    clickEventHandler(): void;
    displayJudgement(): void;
}
