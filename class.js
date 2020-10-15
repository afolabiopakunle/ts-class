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
var newPoint = new Point(23, 12);
newPoint.draw();
