"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fibonacci = /** @class */ (function () {
    //Constructors
    function Fibonacci(x, y) {
        this.suite = new Array(x, y);
    }
    //Methods
    Fibonacci.prototype.getIterator = function (borneSup) {
        return new FibonacciIterator(this.suite, borneSup);
    };
    return Fibonacci;
}());
exports.Fibonacci = Fibonacci;
var FibonacciIterator = /** @class */ (function () {
    //Constructor
    function FibonacciIterator(tableau, borneSup) {
        this.suite = this.fibonacciInitialization(tableau, borneSup);
        this.index = 0;
    }
    FibonacciIterator.prototype.fibonacciInitialization = function (tableau, borneSup) {
        var pas = 0;
        while (pas <= borneSup) {
            tableau.push(tableau[tableau.length - 1] + tableau[tableau.length - 2]);
            pas++;
        }
        return tableau;
    };
    FibonacciIterator.prototype.hasNext = function () {
        return this.index < this.suite.length;
    };
    FibonacciIterator.prototype.next = function () {
        if (this.hasNext()) {
            return this.suite[this.index++];
        }
        return null;
    };
    return FibonacciIterator;
}());
exports.FibonacciIterator = FibonacciIterator;
//# sourceMappingURL=Fibonacci.js.map