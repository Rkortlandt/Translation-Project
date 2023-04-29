import { lineSegElement } from "./BasicElements/lineSegElement";
import { pointElement } from "./BasicElements/pointElement";
import { element } from "./BasicElements/element.js";
import closestNumber from "./SNAP.js";
import {elementTypes, IElement, ILineSegElement, IPoint, IPointElement} from "./Interfaces/IElement.js";

function newID () {
    return Math.floor(Math.random() * 1000000000000);
}
export function addLineStorage(pointA : IPointElement, pointB: IPointElement) {
    let lineSeg : ILineSegElement = {pointA, pointB};
    let mlineSegElement = new lineSegElement(newID(), elementTypes.lineSeg, lineSeg)
    sessionStorage.setItem(`${mlineSegElement.id}${mlineSegElement.type}`, JSON.stringify(mlineSegElement));
}
export function addPointStorage(x: number, y: number, gridSpacing: number) {
    const pointScreenPoint = {
        x: closestNumber(x, gridSpacing),
        y: closestNumber(y, gridSpacing)
    }  
    const pointCords = {
        x: (pointScreenPoint.x - 484/2) / (22 / gridSpacing),
        y: (-pointScreenPoint.y + 484/2) / (22 / gridSpacing)
    }
    let point : IPoint = {pointCords, pointScreenPoint}
    let mPointElement = new pointElement(newID(), elementTypes.point, point);
    sessionStorage.setItem(`${mPointElement.id}${mPointElement.type}`, JSON.stringify(mPointElement));
}