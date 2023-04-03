export class point {
    pointCords: {X: number, Y: number};
    pointScreenPoint: {X: number, Y: number};

    constructor(pointCords: {X: number, Y: number}, pointScreenPoint: {X: number, Y: number}){
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

  