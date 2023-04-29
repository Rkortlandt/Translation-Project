import {ILineSegElement, IPointElement} from "./Interfaces/IElement";
import { elementTypes } from "./Interfaces/IElement"

export function getRawStorage(index: number): any {
  return JSON.parse(sessionStorage.getItem(sessionStorage.key(index) as string) as string);
}
export function getAllObjs(): Array<any> {
  let objArray = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    objArray.push(getRawStorage(i));
  }
  return objArray;
}
export function getAllPointObjs() : IPointElement[] {
  let pointArray : IPointElement[] = [];
  let mGetAllObjs = getAllObjs();
  for (let i = 0; i < mGetAllObjs.length; i++) {
    if (mGetAllObjs[i].type === elementTypes.point) pointArray.push(mGetAllObjs[i]);
  }
  return pointArray;
}
export function getAllLineSegObjs() : ILineSegElement[] {
  let lineSegArray : ILineSegElement[] = [];
  let mGetAllObjs = getAllObjs();
  for (let i = 0; i < mGetAllObjs.length; i++) {
    if (mGetAllObjs[i].type === elementTypes.lineSeg) lineSegArray.push(mGetAllObjs[i]);
  }
  return lineSegArray;
}