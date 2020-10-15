var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X is: " + this.x + "\nY is: " + this.y);
    };
    return Point;
}());
var newPoint = new Point();
newPoint.x = 35;
newPoint.y = 45;
newPoint.draw();
