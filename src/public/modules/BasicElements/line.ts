import { point } from "./point.js";
export class line {
    pointA: point;
    pointB: point;
  
    constructor(pointA: point, pointB: point) {
      this.pointA = pointA;
      this.pointB = pointB;
    }
  
    get getLine(): any {
      return {
        pointA: this.pointA,
        pointB: this.pointB,
      };
    }
  }
  