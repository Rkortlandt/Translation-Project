export class point {
    pointCords: {X: number, Y: number};
    pointScreenPoint: {X: number, Y: number};
    id: number;

    constructor(pointCords: {X: number, Y: number}, pointScreenPoint: {X: number, Y: number}, id: number){
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

  