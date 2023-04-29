import {IElement, ILineSeg, ILineSegElement, IPointElement} from "../Interfaces/IElement.js";
import { pointElement } from "./pointElement";
import {element} from "./element";
export class lineSegElement extends element {
  lineSeg: ILineSeg;
  constructor(id: number, type: string, lineSeg: ILineSeg) {
    super(
      id, type, lineSeg
    );
    this.lineSeg = lineSeg;
  }

  get getLine(): any {
    return {
      pointA: this.lineSeg.pointA,
      pointB: this.lineSeg.pointB,
    };
  }

  distanceToObj(pointXY: { x: number, y: number }): number {
    const x1: number = this.lineSeg.pointA.pointCords.x;
    const y1: number = this.lineSeg.pointA.pointCords.y;
    const x2: number = this.lineSeg.pointB.pointCords.x;
    const y2: number = this.lineSeg.pointB.pointCords.y;
    const x: number = pointXY.x;
    const y: number = pointXY.y;

    const numerator = Math.abs((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - y2 * x1);
    const denominator = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
    return numerator / denominator;
  }
}