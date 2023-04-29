import { IPointElement, IElement} from "./Interfaces/IElement.js";
import isMatchingPoint from "./isMatchingPoint.js";
import {lineSegElement} from "./BasicElements/lineSegElement";

export function renderPoints(pointCanvas: CanvasRenderingContext2D) {
  for (let i = 0; i < sessionStorage.length; i++) {
    const pointElement: IPointElement | null = JSON.parse(sessionStorage.getItem(sessionStorage.key(i) as string) as string);
    //Null Check for Element or if Element is not a pointElement
    if (pointElement == null || pointElement.type != 'point') continue;
    if (!('pointElement' in pointElement)) continue;
    pointCanvas.beginPath();
    pointCanvas.strokeStyle = "#14425a";
    pointCanvas.fillStyle = "#14425a";
    pointCanvas.arc(pointElement.pointElement.pointScreenPoint.x, pointElement.pointElement.pointScreenPoint.y, 6, 0, 2 * Math.PI);
    pointCanvas.fill();
  }
}

/**
 * Renders all lines and removes lines whose points no longer exist.
 * @param {CanvasRenderingContext2D} lineCanvas - The canvas context to render lines onto.
 * @param {number} gridSpacing - The spacing of the grid in pixels.
 * @returns {void}
 */
export function renderLines(lineCanvas: CanvasRenderingContext2D, gridSpacing: number) {
//   for (let i = 0; i < sessionStorage.length; i++) {
//     const Element: IElement | null = JSON.parse(sessionStorage.getItem(sessionStorage.key(i) as string) as string);
//     if (Element == null || Element.type != 'lineSegElement') {
//         continue;
//     }
//     if (isMatchingPoint({x: Element.element.pointA.element.pointScreenPoint.X, y: Element.element.pointA.element.pointScreenPoint.Y}, gridSpacing).isMatching && isMatchingPoint({x: Element.element.pointB.element.pointScreenPoint.X, y: Element.element.pointB.element.pointScreenPoint.Y}, gridSpacing).isMatching) {
//         lineCanvas.beginPath();
//         lineCanvas.strokeStyle = "#00000";
//         lineCanvas.moveTo(Element.element.pointA.element.pointScreenPoint.X, Element.element.pointA.element.pointScreenPoint.Y);
//         lineCanvas.lineTo(Element.element.pointB.element.pointScreenPoint.X, Element.element.pointB.element.pointScreenPoint.Y);
//         lineCanvas.stroke();
//     } else {
//       sessionStorage.removeItem(sessionStorage.key(i) as string);
//     }
//   }
}

