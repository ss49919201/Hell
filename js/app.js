"use strict";
var Point = /** @class */ (function () {
    function Point() {
    }
    Object.defineProperty(Point.prototype, "totalpoint", {
        get: function () {
            var karmas = Karmas.getInstance();
            return karmas.activeElementspoint.reduce(function (total, point) { return total + point; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.render = function () {
        document.querySelector('.point__number').textContent = String(this.totalpoint);
    };
    Point.getInstance = function () {
        if (!Point.instance) {
            Point.instance = new Point();
        }
        return Point.instance;
    };
    return Point;
}());
var Karmas = /** @class */ (function () {
    function Karmas() {
        this.elements = document.querySelectorAll('.karma');
        this._activeElementspoint = [];
        this._activeElements = [];
        this.elements.forEach(function (element) {
            new Karma(element);
        });
    }
    Object.defineProperty(Karmas.prototype, "activeElements", {
        get: function () {
            var _this = this;
            this._activeElements = [];
            this.elements.forEach(function (element) {
                if (element.classList.contains('karma--active')) {
                    _this._activeElements.push(element);
                }
            });
            return this._activeElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Karmas.prototype, "activeElementspoint", {
        get: function () {
            var _this = this;
            this._activeElementspoint = [];
            this.activeElements.forEach(function (element) {
                var karmaPoint = element.querySelector('.karma__point');
                _this._activeElementspoint.push(Number(karmaPoint.textContent));
            });
            return this._activeElementspoint;
        },
        enumerable: false,
        configurable: true
    });
    Karmas.getInstance = function () {
        if (!Karmas.instance) {
            Karmas.instance = new Karmas();
        }
        return Karmas.instance;
    };
    Karmas.prototype.remove = function () {
        this._activeElements = [];
        this.elements.forEach(function (element) {
            if (element.classList.contains('karma--active')) {
                element.classList.remove('karma--active');
            }
        });
    };
    return Karmas;
}());
var Karma = /** @class */ (function () {
    function Karma(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    Karma.prototype.clickEventHandler = function () {
        this.element.classList.toggle('karma--active');
        var point = Point.getInstance();
        point.render();
    };
    return Karma;
}());
var Judge = /** @class */ (function () {
    // _resultpoint: number;
    // _resultPlace: string;
    function Judge() {
        this.element = document.querySelector('.judge');
        this.element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    ;
    Judge.prototype.clickEventHandler = function () {
        this.element.classList.toggle('judge--active');
        if (this.element.classList.contains('judge--active')) {
            this.judge();
            this.element.textContent = "もう一度やり直す";
        }
        else {
            var karmas = Karmas.getInstance();
            karmas.remove();
            this.element.textContent = "判定する";
        }
    };
    ;
    Judge.prototype.judge = function () { };
    ;
    Judge.getInstance = function () {
        if (!Judge.instance) {
            Judge.instance = new Judge();
        }
        return Judge.instance;
    };
    return Judge;
}());
Karmas.getInstance();
Judge.getInstance();
