import { line } from "./BasicElements/line.js";
import { point } from "./BasicElements/point.js";
import { element } from "./BasicElements/element.js";
import closestNumber from "./SNAP.js";
import { IElement } from "./Interfaces/IElement.js";

function newID () {
    return Math.floor(Math.random() * 1000000000000);
}
export function addLineStorage(pointA : IElement, pointB: IElement) {
    var mElement = new element(newID(), 'line', new line(pointA, pointB));
    sessionStorage.setItem(`${mElement.id}${mElement.type}`, JSON.stringify(mElement));
}

export function addPointStorage(x: number, y: number, gridSpacing: number) {
    const pointScreenPoint = {
        X: closestNumber(x, gridSpacing),
        Y: closestNumber(y, gridSpacing)
    }  
    const pointCords = {
        X: (pointScreenPoint.X - 484/2) / (22 / gridSpacing),
        Y: (-pointScreenPoint.Y + 484/2) / (22 / gridSpacing)  
    }
    var mElement = new element(newID(), 'point', new point(pointCords, pointScreenPoint));
    sessionStorage.setItem(`${mElement.id}${mElement.type}`, JSON.stringify(mElement));
}