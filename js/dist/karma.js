import { Point } from "./point.js";
export class Karma {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('karma--active');
        const point = Point.getInstance();
    }
}
console.log('karmas');
