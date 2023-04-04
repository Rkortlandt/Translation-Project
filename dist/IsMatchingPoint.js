import closestNumber from "./SNAP.js";
export default function IsMatchingPoint(pointXY, canvas, ptx, gridSpacing) {
    let isMatching = false;
    for (let i = 0; i < sessionStorage.length; i++) {
        const Element = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (Element == null || Element.type !== 'point') {
            console.log('not a point');
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
    return { isMatching: isMatching };
}
//# sourceMappingURL=IsMatchingPoint.js.map