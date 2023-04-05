import { addPointStorage, addLineStorage} from './addStorage.js';
import { renderPoints, renderLines } from './renderElements.js';
import isMatchingPoint  from './isMatchingPoint.js';
import { clearGuidelines } from './clearCanvas.js';
import { IPointElement, ILineElement, IElement} from "./Interfaces/IElement.js";
import { IModes, modes } from "./Interfaces/IModes.js";


export function handleAddPoint(canvasMousePos : {x: number, y: number}, canvas: HTMLElement, pointCanvas: CanvasRenderingContext2D , gridSpacing : number, lineCanvas: CanvasRenderingContext2D) {
    let mfreeLocation = isMatchingPoint(canvasMousePos, canvas, gridSpacing);
        if (mfreeLocation.isMatching === false) {
            addPointStorage(canvasMousePos.x, canvasMousePos.y, gridSpacing); 
            renderPoints(pointCanvas, canvas);
        } else {
            sessionStorage.removeItem(sessionStorage.key(mfreeLocation.matchPoint as number) as string);
            renderPoints(pointCanvas, canvas);
        }
    renderLines(lineCanvas, canvas, gridSpacing)
}

/**
 * 
 * @param canvasMousePos mouse position on canvas
 * @param canvas canvas element
 * @param ptx point canvas element
 * @param ltx line canvas element
 * @param gridSpacing Spacing of the grid
 * @param pointsSelectedLineSeg Current # of points selected for line segment
 * @param line line button element
 * @param ttx temporary canvas element
 * @param selectedPointA current first point of the line segment
 * @param selectedPointB current second point of the line segment
 * @param modes list of modes for the program
 */
export function handleAddLineSegment(canvasMousePos: {x: number, y:number}, canvas : any, ltx : any, gridSpacing : number, pointsSelectedLineSeg : number, ttx : any, selectedPointA: IElement) {
    let mfreeLocation = isMatchingPoint(canvasMousePos, canvas, gridSpacing);
    let mCurrentMode = modes.addLineSegment;
    let mSelectedPointA;
    let mSelectedPointB;
    let mPointsSelectedLineSeg: number = 0;
    if (pointsSelectedLineSeg === 0) {
        if (mfreeLocation.isMatching === false) {   
            mCurrentMode = modes.addPoints;
            clearGuidelines(ttx, canvas);
        }
        else {
            mPointsSelectedLineSeg = 1;
            mSelectedPointA = JSON.parse(sessionStorage.getItem(sessionStorage.key(mfreeLocation.matchPoint as number) as string) as string);
            ttx.beginPath();
            ttx.fillStyle = "#32CD32";
            ttx.arc(mSelectedPointA.element.pointScreenPoint.X, mSelectedPointA.element.pointScreenPoint.Y, 6, 0, 2 * Math.PI);
            ttx.fill();
        }
    }
    else if (pointsSelectedLineSeg === 1) {
        if (mfreeLocation.isMatching === false) {
            mCurrentMode = modes.addPoints;
            clearGuidelines(ttx, canvas);
        }
        else { 
            mPointsSelectedLineSeg = 0;
            mSelectedPointB = JSON.parse(sessionStorage.getItem(sessionStorage.key(mfreeLocation.matchPoint as number) as string) as string);
            addLineStorage(selectedPointA, mSelectedPointB);
            renderLines(ltx, canvas, gridSpacing);
            clearGuidelines(ttx, canvas);
            mCurrentMode = modes.addPoints;
        }  
    }
    return {
        pointsSelectedLineSeg: mPointsSelectedLineSeg, 
        currentMode: mCurrentMode, 
        selectedPointA: mSelectedPointA,     
    };
}