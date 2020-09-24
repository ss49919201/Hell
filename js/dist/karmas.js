"use strict";
class Karmas {
    constructor() {
        this.elements = document.querySelectorAll('.karma');
        this._activeElementspoint = [];
        this._activeElements = [];
        this.elements.forEach(element => {
            new Karma(element);
        });
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('karma--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementspoint() {
        this._activeElementspoint = [];
        this.activeElements.forEach(element => {
            const karmaPoint = element.querySelector('.karma__point');
            this._activeElementspoint.push(Number(karmaPoint.textContent));
        });
        return this._activeElementspoint;
    }
    static getInstance() {
        if (!Karmas.instance) {
            Karmas.instance = new Karmas();
        }
        return Karmas.instance;
    }
    remove() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('karma--active')) {
                element.classList.remove('karma--active');
            }
        });
    }
}
