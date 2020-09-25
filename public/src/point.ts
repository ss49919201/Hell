import { Pointable } from "./interface";
import { Karmas } from "./karmas";

export class Point implements Pointable {
    private static instance: Point;
    private constructor() { }
    get totalpoint(): number {
        const karmas = Karmas.getInstance();
        return karmas.activeElementspoint.reduce((total, point) => total + point, 0)
    }
    static getInstance() {
        if (!Point.instance) {
            Point.instance = new Point();
        }
        return Point.instance;
    }
}