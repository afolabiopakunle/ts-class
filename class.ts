class Point {
    x: number;
    y: number;

    draw() {
        console.log("X is: " + this.x + "\nY is: " + this.y)
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

let newPoint = new Point(23, 12);

newPoint.draw()