// Clear Data-----------------------------------------------------------
/**
 * 
 * @param ptx pointElement canvas
 * @param ltx lineSegElement canvas
 * @param ttx Guidelines canvas
 * @param canvas normal canvas
 */
export function clearPointsLinesGuidelines(ptx : any, ltx : any, ttx : any, canvas : any) {
    ptx.clearRect(0, 0, canvas.width, canvas.height);
    ltx.clearRect(0, 0, canvas.width, canvas.height);
    ttx.clearRect(0, 0, canvas.width, canvas.height);
    (document.getElementById('scaleFactor') as HTMLInputElement).value = '0';
}
/** 
 * @param saveNumber 
 * @param totalPoints
 * 
 * @return saveNumber = 0 & totalPoints = 0 
 */
export function clearStorage(saveNumber : number, totalPoints : number) {
    sessionStorage.clear();
    return (
        saveNumber = 0,
        totalPoints = 0
    );
}
/**
 * 
 * @param {*} ttx Guidelines canvas
 * @param {*} canvas normal canvas'
 * @return Clears the Guidelines canvas (This does not return anything)
 */
export function clearGuidelines(ttx : any, canvas : any) {
    ttx.clearRect(0, 0, canvas.width, canvas.height);
}


/**
 * Clears all the canvas contexts and clears sessionStorage.
 * @param gridCanvas The canvas rendering context for the grid.
 * @param linesCanvas The canvas rendering context for the lines.
 * @param pointsCanvas The canvas rendering context for the points.
 * @param markingsCanvas The canvas rendering context for the markings.
 * @param previewCanvas The canvas rendering context for the preview.
 * @param canvas The HTML canvas element.
 */
export function clearAll(
  gridCanvas: CanvasRenderingContext2D,
  linesCanvas: CanvasRenderingContext2D,
  pointsCanvas: CanvasRenderingContext2D,
  markingsCanvas: CanvasRenderingContext2D,
  previewCanvas: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
): void {
  clearCanvases(gridCanvas, linesCanvas, pointsCanvas, markingsCanvas, previewCanvas, canvas);
  sessionStorage.clear();
}

/**
 * Clears all the canvas contexts.
 * @param gridCanvas The canvas rendering context for the grid.
 * @param linesCanvas The canvas rendering context for the lines.
 * @param pointsCanvas The canvas rendering context for the points.
 * @param markingsCanvas The canvas rendering context for the markings.
 * @param previewCanvas The canvas rendering context for the preview.
 * @param canvas The HTML canvas element.
 */
export function clearCanvases(
  gridCanvas: CanvasRenderingContext2D,
  linesCanvas: CanvasRenderingContext2D,
  pointsCanvas: CanvasRenderingContext2D,
  markingsCanvas: CanvasRenderingContext2D,
  previewCanvas: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
): void {
  gridCanvas.clearRect(0, 0, canvas.width, canvas.height);
  previewCanvas.clearRect(0, 0, canvas.width, canvas.height);
  clearNonStatic(linesCanvas, pointsCanvas, markingsCanvas, canvas);
}

export function clearNonStatic(linesCanvas: CanvasRenderingContext2D, pointsCanvas: CanvasRenderingContext2D, markingsCanvas: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
  linesCanvas.clearRect(0, 0, canvas.width, canvas.height);
  pointsCanvas.clearRect(0, 0, canvas.width, canvas.height);
  markingsCanvas.clearRect(0, 0, canvas.width, canvas.height);
}




