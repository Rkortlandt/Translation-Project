import { point } from "./point.js";
export class line {
    pointA: point;
    pointB: point;
    id: number;
  
    constructor(pointA: point, pointB: point, id: number) {
      this.pointA = pointA;
      this.pointB = pointB;
      this.id = id;
    }
  
    get getLine(): any {
      return {
        pointA: this.pointA,
        pointB: this.pointB,
        type: "Line",
        id: this.id
      };
    }
  }
  