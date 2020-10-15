export class Point {
    draw() {
        console.log("X is: " + this.x + "\nY is: " + this.y)
    }

    constructor(private x: number, public y: number) {}
}
