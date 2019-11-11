import {Container} from "./Container";
import {Iterator} from "./Iterator";

export class Fibonacci implements Container{
    //Attributes
    protected suite: Array<number>;

    //Constructors
    public constructor(x: number, y: number) {
        this.suite = new Array<number>(x, y);
    }

    //Methods
    public getIterator(borneSup: number): Iterator {
        return new FibonacciIterator(this.suite, borneSup);
    }

}

export class FibonacciIterator implements Iterator{
    //Attributes
    protected suite: Array<number>;
    protected index: number;

    //Constructor
    constructor(tableau: Array<number>, borneSup: number){
        this.suite = this.fibonacciInitialization(tableau, borneSup);
        this.index = 0;
    }

    fibonacciInitialization(tableau: Array<number>, borneSup: number){
        let pas = 0;
        while(pas <= borneSup) {
            tableau.push(tableau[tableau.length-1] + tableau[tableau.length-2]);
            pas++;
        }
        return tableau;
    }

    hasNext(): boolean {
        return this.index < this.suite.length;
    }

    next(): Object {
        if(this.hasNext()){
            return this.suite[this.index++];
        } return null;
    }
}