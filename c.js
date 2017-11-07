class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Point.prototype.show = function() {
    console.log('X = ' + this.x);
}

const p1 = new Point(1, 0);
const p2 = new Point(10, 0);

p1.show();
