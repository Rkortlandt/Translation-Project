import { IElement } from "../Interfaces/IElement.js";
import { point } from "./point.js";
export class line {
    pointA: IElement;
    pointB: IElement;
  
    constructor(pointA: IElement, pointB: IElement) {
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
  