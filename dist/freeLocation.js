import closestNumber from "./SNAP.js";
export default function freeLocation(canvasMousePos, canvas, ptx, gridSpacing) {
    let freeLocation = true;
    for (let i = 0; i < sessionStorage.length; i++) {
        const Element = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (Element == null || Element.type !== 'point') {
            console.log('not a point');
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
    return { freeLocation: freeLocation };
}
//# sourceMappingURL=freeLocation.js.map