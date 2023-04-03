import { IPointElement } from "./Interfaces/IElement.js";

export default function renderPoints(ptx: any, canvas: any) {
  ptx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < sessionStorage.length; i++) {
    const Element: IPointElement | null = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
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

  
