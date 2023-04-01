import { line } from "./BasicElements/line.js";
import { point } from "./BasicElements/point.js";
import closestNumber from "./SNAP.js";

export function addLineStorage(pointA, pointB, id) {
    var Line = new line(pointA, pointB, id);
    sessionStorage.setItem(Line.getLine.id, Line.getLine);
}

export function addPointStorage(x, y, id, gridSpacing) {
    const pointScreenPoint = {
        X: closestNumber(x, gridSpacing),
        Y: closestNumber(y, gridSpacing)
    }  
    const pointCords = {
        X: pointScreenPoint.X - 484/2,
        Y: -pointScreenPoint.Y + 484/2  
    }
    var Point = new point(pointCords, pointScreenPoint, id);
    sessionStorage.setItem(`${Point.getPoint.id}${Point.getPoint.type}`, JSON.stringify(Point.getPoint));
}