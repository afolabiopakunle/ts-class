class Point {
    x: number;
    y: number;

    draw() {
        console.log("X is: " + this.x + "\nY is: " + this.y)
    }
}

let newPoint = new Point();

newPoint.x = 35;
newPoint.y = 45;

newPoint.draw()