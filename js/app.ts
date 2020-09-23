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
    remove():void;
}
interface Judgeable {
    element: HTMLDivElement;
    readonly resultPoint: number;
    readonly resultPlace: string;
    clickEventHandler(): void;
    displayJudgement(): void;
}

class Point implements Pointable{    
    private static instance: Point;
    private constructor(){}
    get totalpoint(): number {        
        const karmas = Karmas.getInstance();
        return karmas.activeElementspoint.reduce((total,point) => total + point,0)
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
    }
}
class Judge implements Judgeable{    
    private static instance: Judge;
    element: HTMLDivElement = document.querySelector<HTMLDivElement>('.judge')!;
    private constructor() {
        this.element.addEventListener('click', this.clickEventHandler.bind(this))
     };
    clickEventHandler(): void{
        this.element.classList.toggle('judge--active');
        if (this.element.classList.contains('judge--active')) {
            this.displayJudgement();
            this.element.textContent = "もう一度やり直す";
        } else {
            const karmas = Karmas.getInstance();
            karmas.remove();
            this.element.textContent = "判定する";
            document.querySelector('.result')!.classList.remove('result--display');
        }
    };
    get resultPoint() {
        const point = Point.getInstance();
        return point.totalpoint;
    }
    get resultPlace(): string {
        const resultPoint = this.resultPoint;
        if (resultPoint < 0) {
            return "無間地獄";
        }
        return "地獄";
    }
    displayJudgement(): void{
        document.querySelector('.result__point')!.textContent = String(this.resultPoint);
        document.querySelector('.result__place')!.textContent = this.resultPlace;
        document.querySelector('.result')!.classList.add('result--display');
     };
    static getInstance() {
        if (!Judge.instance) {
            Judge.instance = new Judge();
        }
        return Judge.instance;
    }
}
Karmas.getInstance();
Judge.getInstance();