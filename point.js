"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X is: " + this.x + "\nY is: " + this.y);
    };
    return Point;
}());
exports.Point = Point;
