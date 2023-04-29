
import {renderPoints} from "./renderElements.js";
import closestNumber from "./SNAP.js";
import { IElement, IPointElement } from "./Interfaces/IElement.js";

export default function isMatchingPoint(pointXY: {x: number, y:number}, gridSpacing: number) {
    let isMatching: boolean = false;
    for (let i = 0; i < sessionStorage.length; i++) {
        //Get element from sessionStorage
        let mPointElement: IPointElement = JSON.parse(sessionStorage.getItem(sessionStorage.key(i) as string) as string);

        if (mPointElement == null || mPointElement.type !== 'point') continue;

        if (!('pointElement' in mPointElement)) continue;


        if (mPointElement.pointElement.pointScreenPoint.x === closestNumber(pointXY.x, gridSpacing) && mPointElement.pointElement.pointScreenPoint.y === closestNumber(pointXY.y, gridSpacing)) {
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