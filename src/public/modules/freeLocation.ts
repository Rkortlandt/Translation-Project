
import renderPoints from "./renderElements.js";
import closestNumber from "./SNAP.js";
import { IPointElement } from "./Interfaces/IElement.js";

export default function freeLocation(canvasMousePos: { x: number, y: number }, canvas: HTMLCanvasElement, ptx: CanvasRenderingContext2D, gridSpacing: number) {
    let freeLocation: boolean = true;
    for (let i = 0; i < sessionStorage.length; i++) { 
        const Element: IPointElement | null = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (Element == null || Element.type !== 'point') {
            console.log('not a point')
            continue;
        }
        if (Element.element.pointScreenPoint.X === closestNumber(canvasMousePos.x, gridSpacing) && Element.element.pointScreenPoint.Y === closestNumber(canvasMousePos.y, gridSpacing)) {
            return {
                freeLocation: false,
                matchPoint: i
            };
        }
        else {
            freeLocation = true;
        }
    }
return { freeLocation: freeLocation};
}