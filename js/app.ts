interface Pointable {
    readonly totalpoint: number;
    render(): void;
}
interface Karmaable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
interface Karmasable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementspoint: number[];
    remove():void;
}
interface Judgeable {
    element: HTMLDivElement;
    // readonly resultpoint: number;
    // readonly resultPlace: string;
    clickEventHandler(): void;
    judge(): void;
}

class Point implements Pointable{    
    private static instance: Point;
    private constructor(){}
    get totalpoint(): number {        
        const karmas = Karmas.getInstance();
        return karmas.activeElementspoint.reduce((total,point) => total + point,0)
    }
    render(): void{
        document.querySelector('.point__number')!.textContent = String(this.totalpoint);
    }
    static getInstance() {
        if (!Point.instance) {
            Point.instance = new Point();
        }
        return Point.instance;
    }
}
class Karmas implements Karmasable{
    private static instance: Karmas;
    elements = document.querySelectorAll<HTMLDivElement>('.karma');
    private _activeElementspoint: number[] = [];
    private _activeElements: HTMLDivElement[] = [];
    private constructor() {
        this.elements.forEach(element => {
            new Karma(element);
        })
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('karma--active')) {
                this._activeElements.push(element);
            }
        })
        return this._activeElements;
    }
    get activeElementspoint() {
        this._activeElementspoint = [];
        this.activeElements.forEach( element => {
            const karmaPoint = element.querySelector('.karma__point')!;
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
        })
    }
}
class Karma implements Karmaable{
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler(): void{
        this.element.classList.toggle('karma--active');
        const point = Point.getInstance();
        point.render();
    }
}
class Judge implements Judgeable{    
    private static instance: Judge;
    element: HTMLDivElement = document.querySelector<HTMLDivElement>('.judge')!;
    // _resultpoint: number;
    // _resultPlace: string;
    private constructor() {
        this.element.addEventListener('click', this.clickEventHandler.bind(this))
     };
    clickEventHandler(): void{
        this.element.classList.toggle('judge--active');
        if (this.element.classList.contains('judge--active')) {
            this.judge();
            this.element.textContent = "もう一度やり直す";
        } else {
            const karmas = Karmas.getInstance();
            karmas.remove();
            this.element.textContent = "判定する";
        }
    };
    judge(): void{ };
    static getInstance() {
        if (!Judge.instance) {
            Judge.instance = new Judge();
        }
        return Judge.instance;
    }
}
Karmas.getInstance();
Judge.getInstance();