import { addPointStorage, addLineStorage} from './addStorage.js';
import isMatchingPoint  from './isMatchingPoint.js';
import { clearGuidelines } from './clearCanvas.js';
import { IPointElement, ILineSegElement, IElement} from "./Interfaces/IElement.js";
import { IModes, modes } from "./Interfaces/IModes.js";

/**
 * @param canvasMousePos mouse position on canvas
 * @param gridSpacing the spacing of the grid on the canvas
 */
export function handleAddPoint(canvasMousePos : {x: number, y: number}, gridSpacing : number) {
  let mIsMatching  = isMatchingPoint(canvasMousePos, gridSpacing);
  if (!mIsMatching.isMatching) {
    addPointStorage(canvasMousePos.x, canvasMousePos.y, gridSpacing);
  } else {
    sessionStorage.removeItem(sessionStorage.key(mIsMatching.matchPoint as number) as string);
  }
}

/**

 Handles the adding of a lineSegElement segment to the canvas
 @param {Object} canvasMousePos - An object containing the x and y coordinates of the mouse click on the canvas
 @param {number} gridSpacing - The spacing of the grid on the canvas
 @param {number} pointsSelected - The number of points currently selected
 @param previewCanvas - The HTML canvas rendering context for the preview canvas
 @param {HTMLElement} canvas - The HTML canvas element
 @param {Object} selectedPointA - An object containing information about the first selected pointElement
 @returns {Object} - An object containing the number of points selected for the lineSegElement segment, the current mode, and the first selected pointElement object
 */
export function handleAddLineSegment(canvasMousePos: {x: number, y:number}, gridSpacing : number, pointsSelected : number, previewCanvas : any, canvas: HTMLElement, selectedPointA: IPointElement | undefined) {
  let mIsMatching = isMatchingPoint(canvasMousePos, gridSpacing);
  let mCurrentMode = modes.addLineSegment;
  let mSelectedPointA : IPointElement | undefined = selectedPointA;
  let mSelectedPointB : IPointElement | undefined;
  let mPointsSelected: number = 0;

  if (pointsSelected === 0) {
    //If no points are selected
    if (!mIsMatching.isMatching) {
      //If clicked area not matching an existing pointElement
      mCurrentMode = modes.addPoints;
      clearGuidelines(previewCanvas, canvas);
    } else {
      //If clicked area is matching an existing pointElement
      mPointsSelected = 1;
      mSelectedPointA = JSON.parse(sessionStorage.getItem(sessionStorage.key(mIsMatching.matchPoint as number) as string) as string);
      previewCanvas.beginPath();
      previewCanvas.fillStyle = "#32CD32";
      // @ts-ignore
      previewCanvas.arc(mSelectedPointA.pointElement.pointScreenPoint.x, mSelectedPointA.pointElement.pointScreenPoint.y, 6, 0, 2 * Math.PI);
      previewCanvas.fill();
    }
  } else if (pointsSelected === 1) {
    //If one pointElement is selected
    if (!mIsMatching.isMatching) {
      //If clicked area IS NOT matching an existing pointElement
      mCurrentMode = modes.addPoints;
      clearGuidelines(previewCanvas, canvas);
    } else {
      //If clicked area IS matching an existing pointElement
      mPointsSelected = 0;
      mSelectedPointB = JSON.parse(sessionStorage.getItem(sessionStorage.key(mIsMatching.matchPoint as number) as string) as string);
      //@ts-ignore
      addLineStorage(selectedPointA, mSelectedPointB);
      clearGuidelines(previewCanvas, canvas);
      mCurrentMode = modes.addPoints;
    }
  }
    return {
        pointsSelectedLineSeg: mPointsSelected,
        currentMode: mCurrentMode, 
        selectedPointA: mSelectedPointA,     
    };
}