import IsMatchingPoint from "./isMatchingPoint.js";
export function renderPoints(ptx, canvas) {
    ptx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < sessionStorage.length; i++) {
        const Element = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (Element == null || Element.type != 'point') {
            continue;
        }
        ptx.beginPath();
        ptx.strokeStyle = "#14425a";
        ptx.fillStyle = "#14425a";
        ptx.arc(Element.element.pointScreenPoint.X, Element.element.pointScreenPoint.Y, 6, 0, 2 * Math.PI);
        ptx.fill();
    }
}
export function renderLines(ltx, canvas, ptx, gridSpacing) {
    ltx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < sessionStorage.length; i++) {
        const Element = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (Element == null || Element.type != 'line') {
            continue;
        }
        if (IsMatchingPoint({ x: Element.element.pointA.element.pointScreenPoint.X, y: Element.element.pointA.element.pointScreenPoint.Y }, canvas, ptx, gridSpacing).isMatching
            &&
                IsMatchingPoint({ x: Element.element.pointB.element.pointScreenPoint.X, y: Element.element.pointB.element.pointScreenPoint.Y }, canvas, ptx, gridSpacing).isMatching) {
            ltx.beginPath();
            ltx.strokeStyle = "#00000";
            ltx.moveTo(Element.element.pointA.element.pointScreenPoint.X, Element.element.pointA.element.pointScreenPoint.Y);
            ltx.lineTo(Element.element.pointB.element.pointScreenPoint.X, Element.element.pointB.element.pointScreenPoint.Y);
            ltx.stroke();
        }
        else {
            sessionStorage.removeItem(sessionStorage.key(i));
        }
    }
}
//# sourceMappingURL=renderElements.js.map