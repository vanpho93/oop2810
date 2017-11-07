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
        return length;
    }
}

class Triangle {
    constructor(pA, pB, pC) {
        this.pA = pA;
        this.pB = pB;
        this.pC = pC;
    }

    getPerimeter() {
        const l1 = new Line(this.pA, this.pB);
        const l2 = new Line(this.pA, this.pC);
        const l3 = new Line(this.pB, this.pC);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const p1 = new Point(0, 0);
const p2 = new Point(1, 0);
const p3 = new Point(0, 1);
const t1 = new Triangle(p1, p2, p3);
console.log(t1.getPerimeter());
// l1.getLength();
