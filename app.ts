interface Scoreable {
    readonly totalscore: number;
    calc(): void;
}
interface Questionable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
interface Questionsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}
interface Judgeable {

}

class Score implements Scoreable{    
    get totalscore(): number {        

    }
    calc(): void{
        
    }
}
class Questions implements Questionsable{    
}
class Question implements Questionable{        
    clickEventHandler():void{}
}
class Judge implements Judgeable{
    
}