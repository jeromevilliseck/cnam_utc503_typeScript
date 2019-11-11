export abstract class Figure {

    //Attributes
    protected numberOfSizes: number;
    protected sideSize: number;
    protected scope: number;
    protected area: number;

    //Constructors
    protected constructor(sideSize: number) {
        this.sideSize = sideSize;
    }

    //Methods
    abstract calculScope();
    abstract calculArea();
    abstract rapport();

    toString(): string {
        return "Object: " + this.valueOf().toString() + "\n"
            + "number of sides: " + this.numberOfSizes + "\n"
            + "side Size: " + this.sideSize + "\n"
            + "scope : " + this.scope + "\n"
            + "area : " + this.area + "\n";
    }
}

export class Triangle extends Figure {
    constructor(sideSize: number) {
        super(sideSize);
        this.numberOfSizes = 3;
        this.calculScope();
        this.calculArea();
    }

    calculScope() {
        this.scope = this.sideSize * this.numberOfSizes;
    }

    calculArea() {
        this.area = Math.sqrt(3)/4*Math.pow(this.sideSize, 2);
    }

    rapport() {
        this.toString();
    }

    toString(): string {
        return "Object: " + this.valueOf().toString() + "\n"
        + super.toString() + "\n"
    }
}

export class Losange extends Figure {
    constructor(diagonal_1: number, diagonal_2: number) {
        super(diagonal_1); //Surcharge des constructeurs impossible en typescript ?
        this.sideSize = this.pythagore(diagonal_1/2, diagonal_2/2);
        this.numberOfSizes = 4;
        this.calculScope();
        this.calcultArea(diagonal_1, diagonal_2);
    }

    calculScope() {
        this.scope = this.sideSize * this.numberOfSizes;
    }

    calculArea() { //a revoir
    }

    calcultArea(a: number, b: number){
        this.area = a*b/2;
    }

    rapport() {
        this.toString();
    }

    pythagore(a: number, b: number): number {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }

    toString(): string {
        return "Object: " + this.valueOf().toString() + "\n"
            + super.toString() + "\n"
    }
}
