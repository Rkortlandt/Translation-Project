import {IElement, IPoint, IPointElement} from '../Interfaces/IElement';
import {element} from "./element";
export class pointElement extends element {
  point: IPoint;

    constructor (id: number, type: string, point: IPoint) {
      super (
        id, type, point
      );
      this.point = point;
    }

    get getPointElement() {
        return {
            id: this.id,
            type: this.type,
            point: this.point
        };
    }

    distanceToObj(pointXY: {x: number, y: number}) {
        const x1 : number = this.point.pointCords.x;
        const y1 : number = this.point.pointCords.y;
        const x : number = pointXY.x;
        const y: number = pointXY.y;
        return Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2);
    }


}

  