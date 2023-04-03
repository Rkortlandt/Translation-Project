export class point {
    pointCords;
    pointScreenPoint;
    constructor(pointCords, pointScreenPoint) {
        this.pointCords = pointCords;
        this.pointScreenPoint = pointScreenPoint;
    }
    get getPoint() {
        return {
            pointScreenPoint: this.pointScreenPoint,
            pointCords: this.pointCords,
        };
    }
}
//# sourceMappingURL=point.js.map