"use strict";
class Point {
    constructor() { }
    get totalpoint() {
        const karmas = Karmas.getInstance();
        return karmas.activeElementspoint.reduce((total, point) => total + point, 0);
    }
    static getInstance() {
        if (!Point.instance) {
            Point.instance = new Point();
        }
        return Point.instance;
    }
}
