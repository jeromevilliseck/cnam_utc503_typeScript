"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Figure = /** @class */ (function () {
    //Constructors
    function Figure(sideSize) {
        this.sideSize = sideSize;
    }
    Figure.prototype.toString = function () {
        return "Object: " + this.valueOf().toString() + "\n"
            + "number of sides: " + this.numberOfSizes + "\n"
            + "side Size: " + this.sideSize + "\n"
            + "scope : " + this.scope + "\n"
            + "area : " + this.area + "\n";
    };
    return Figure;
}());
exports.Figure = Figure;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(sideSize) {
        var _this = _super.call(this, sideSize) || this;
        _this.numberOfSizes = 3;
        _this.calculScope();
        _this.calculArea();
        return _this;
    }
    Triangle.prototype.calculScope = function () {
        this.scope = this.sideSize * this.numberOfSizes;
    };
    Triangle.prototype.calculArea = function () {
        this.area = Math.sqrt(3) / 4 * Math.pow(this.sideSize, 2);
    };
    Triangle.prototype.rapport = function () {
        this.toString();
    };
    Triangle.prototype.toString = function () {
        return "Object: " + this.valueOf().toString() + "\n"
            + _super.prototype.toString.call(this) + "\n";
    };
    return Triangle;
}(Figure));
exports.Triangle = Triangle;
var Losange = /** @class */ (function (_super) {
    __extends(Losange, _super);
    function Losange(diagonal_1, diagonal_2) {
        var _this = _super.call(this, diagonal_1) || this;
        _this.sideSize = _this.pythagore(diagonal_1 / 2, diagonal_2 / 2);
        _this.numberOfSizes = 4;
        _this.calculScope();
        _this.calcultArea(diagonal_1, diagonal_2);
        return _this;
    }
    Losange.prototype.calculScope = function () {
        this.scope = this.sideSize * this.numberOfSizes;
    };
    Losange.prototype.calculArea = function () {
    };
    Losange.prototype.calcultArea = function (a, b) {
        this.area = a * b / 2;
    };
    Losange.prototype.rapport = function () {
        this.toString();
    };
    Losange.prototype.pythagore = function (a, b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    };
    Losange.prototype.toString = function () {
        return "Object: " + this.valueOf().toString() + "\n"
            + _super.prototype.toString.call(this) + "\n";
    };
    return Losange;
}(Figure));
exports.Losange = Losange;
//# sourceMappingURL=Figure.js.map