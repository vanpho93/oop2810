class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        console.log(length);
    }
}

const p1 = new Point(0, 0);
const p2 = new Point(1, 1);
const l1 = new Line(p1, p2);

l1.getLength();
