import { addPointStorage, addLineStorage } from './addStorage.js';
import { renderPoints, renderLines } from './renderElements.js';
import isMatchingPoint from './isMatchingPoint.js';
import { clearGuidelines } from './clearCanvas.js';
export function handleAddPoint(canvasMousePos, canvas, ptx, gridSpacing, ltx) {
    let mfreeLocation = isMatchingPoint(canvasMousePos, canvas, ptx, gridSpacing);
    if (mfreeLocation.isMatching === false) {
        addPointStorage(canvasMousePos.x, canvasMousePos.y, gridSpacing);
        renderPoints(ptx, canvas);
    }
    else {
        sessionStorage.removeItem(sessionStorage.key(mfreeLocation.matchPoint));
        renderPoints(ptx, canvas);
    }
    renderLines(ltx, canvas, ptx, gridSpacing);
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
export function handleAddLineSegment(canvasMousePos, canvas, ptx, ltx, gridSpacing, pointsSelectedLineSeg, line, ttx, selectedPointA, selectedPointB, modes) {
    let mfreeLocation = isMatchingPoint(canvasMousePos, canvas, ptx, gridSpacing);
    let mCurrentMode = modes.addLineSegment;
    let mSelectedPointA;
    let mSelectedPointB;
    let mPointsSelectedLineSeg;
    if (pointsSelectedLineSeg === 0) {
        if (mfreeLocation.isMatching === false) {
            mCurrentMode = modes.addPoints;
            line.style.backgroundColor = "white";
            clearGuidelines(ttx, canvas);
        }
        else {
            mPointsSelectedLineSeg = 1;
            mSelectedPointA = JSON.parse(sessionStorage.getItem(sessionStorage.key(mfreeLocation.matchPoint)));
            ttx.beginPath();
            ttx.fillStyle = "#32CD32";
            ttx.arc(mSelectedPointA.element.pointScreenPoint.X, mSelectedPointA.element.pointScreenPoint.Y, 6, 0, 2 * Math.PI);
            ttx.fill();
        }
    }
    else if (pointsSelectedLineSeg === 1) {
        if (mfreeLocation.isMatching === false) {
            mCurrentMode = modes.addPoints;
            line.style.backgroundColor = "white";
            clearGuidelines(ttx, canvas);
        }
        else {
            mPointsSelectedLineSeg = 0;
            mSelectedPointB = JSON.parse(sessionStorage.getItem(sessionStorage.key(mfreeLocation.matchPoint)));
            addLineStorage(selectedPointA, mSelectedPointB);
            renderLines(ltx, canvas, ptx, gridSpacing);
            clearGuidelines(ttx, canvas);
            mCurrentMode = modes.addPoints;
            line.style.backgroundColor = "white";
        }
    }
    return {
        pointsSelectedLineSeg: mPointsSelectedLineSeg,
        currentMode: mCurrentMode,
        selectedPointA: mSelectedPointA,
    };
}
//# sourceMappingURL=handleClick.js.map