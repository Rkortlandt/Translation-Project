export class line {
    pointA;
    pointB;
    id;
    constructor(pointA, pointB, id) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.id = id;
    }
    get getLine() {
        return {
            pointA: this.pointA,
            pointB: this.pointB,
        };
    }
}
//# sourceMappingURL=line.js.map