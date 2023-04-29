import {getAllLineSegObjs, getAllPointObjs} from "./getObjs";
import {IPointElement, ILineSegElement, IPointXY} from "./Interfaces/IElement";
import {pointElement} from "./BasicElements/pointElement";
import closestNumber from "./SNAP";
import windowToCanvas from "./windowToCanvas";
import {lineSegElement} from "./BasicElements/lineSegElement";

export function updateHover(canvasMousePos: IPointXY) : [pointElement[], lineSegElement[]] {
  return [boundPoints(canvasMousePos), boundLineSegs(canvasMousePos)]
}

function boundPoints(PointCords : IPointXY) {
  let points = getAllPointObjs();
  let hoveredPoints : pointElement[] = [];
  points.map((point : IPointElement, index: number, array : IPointElement[]) => {
    let mPointElement : pointElement = new pointElement(point.id, point.type, point.point);
    if (mPointElement.distanceToObj(PointCords) < 10) hoveredPoints.push(mPointElement);
  })
  console.log(hoveredPoints);
  return hoveredPoints;
}

function boundLineSegs(PointCords : IPointXY) {
  let lineSegs = getAllLineSegObjs();
  let hoveredLineSegs : lineSegElement[] = []
  lineSegs.map((lineSeg : ILineSegElement, index : number, array : ILineSegElement[]) => {
    let mLineSegElement : lineSegElement = new lineSegElement(lineSeg.id, lineSeg.type, lineSeg.lineSeg)
  })
  return hoveredLineSegs;
}
