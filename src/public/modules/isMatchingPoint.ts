
import {renderPoints} from "./renderElements.js";
import closestNumber from "./SNAP.js";
import { IPointElement } from "./Interfaces/IElement.js";

export default function isMatchingPoint(pointXY: { x: number, y: number }, canvas: HTMLElement, ptx: HTMLElement, gridSpacing: number) {
    let isMatching: boolean = false;
    for (let i = 0; i < sessionStorage.length; i++) { 
        console.log('this code is running')
        const Element: IPointElement | null = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (Element == null || Element.type !== 'point') {
            continue;
        }
        if (Element.element.pointScreenPoint.X === closestNumber(pointXY.x, gridSpacing) && Element.element.pointScreenPoint.Y === closestNumber(pointXY.y, gridSpacing)) {
            return {
                isMatching: true,
                matchPoint: i
            };
        }
        else {
            isMatching = false;
        }
    }
return { isMatching: isMatching};
}