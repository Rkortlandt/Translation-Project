export class line {
    pointA;
    pointB;
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }
    get getLine() {
        return {
            pointA: this.pointA,
            pointB: this.pointB,
        };
    }
}
//# sourceMappingURL=line.js.map