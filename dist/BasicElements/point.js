export class point {
    pointCords;
    pointScreenPoint;
    id;
    constructor(pointCords, pointScreenPoint, id) {
        this.pointCords = pointCords;
        this.pointScreenPoint = pointScreenPoint;
        this.id = id;
    }
    get getPoint() {
        return {
            pointScreenPoint: this.pointScreenPoint,
            pointCords: this.pointCords,
            type: "Point",
            id: this.id
        };
    }
}
//# sourceMappingURL=point.js.map