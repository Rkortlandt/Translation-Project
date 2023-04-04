import closestNumber from "./SNAP.js";
export default function isMatchingPoint(pointXY, canvas, ptx, gridSpacing) {
    let isMatching = false;
    for (let i = 0; i < sessionStorage.length; i++) {
        console.log('this code is running');
        const Element = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
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
    return { isMatching: isMatching };
}
//# sourceMappingURL=isMatchingPoint.js.map