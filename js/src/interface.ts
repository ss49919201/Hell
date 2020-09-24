interface Pointable {
    readonly totalpoint: number;
}
interface Karmaable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
interface Karmasable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementspoint: number[];
    remove(): void;
}
interface Judgeable {
    element: HTMLDivElement;
    readonly resultPoint: number;
    readonly resultPlace: string;
    clickEventHandler(): void;
    displayJudgement(): void;
}