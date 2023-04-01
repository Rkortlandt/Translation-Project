// Clear Data-----------------------------------------------------------
/**
 * 
 * @param ptx point canvas
 * @param ltx line canvas
 * @param ttx Guidelines canvas
 * @param canvas normal canvas
 */
export function clearPointsLinesGuidelines(ptx, ltx, ttx, canvas) {
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
export function clearStorage(saveNumber, totalPoints) {
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
export function clearGuidelines(ttx, canvas) {
    ttx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * 
 * @param {*} ltx line canvas
 * @param {*} ptx point canvas
 * @param {*} stx static canvas
 * @param {*} ttx temp canvas / Guidelines 
 * @param {*} canvas normal canvas 
 * @return saveNumber = 0, totalPoints = 0 
 */
export function clearAll(ltx, ptx, stx, ttx, canvas) {
    console.log("clearAllFunc Clicked")
    stx.clearRect(0, 0, canvas.width, canvas.height);
    ptx.clearRect(0, 0, canvas.width, canvas.height);
    ltx.clearRect(0, 0, canvas.width, canvas.height);
    ttx.clearRect(0, 0, canvas.width, canvas.height);
    (document.getElementById('scaleFactor') as HTMLInputElement).value = '0';
    sessionStorage.clear();
}
