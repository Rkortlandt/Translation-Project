import { pointElement } from '../BasicElements/pointElement';
import { lineSegElement } from '../BasicElements/lineSegElement';

export type ElementType = 'point' | 'lineSegment' | 'shape';

export interface IPointXY {
  x: number;
  y: number;
}
export interface IPoint {
    pointCords: {x: number, y: number};
    pointScreenPoint: {x: number, y: number};
}
export interface IPointElement {
  id: number;
  type: string;
  point: IPoint;
}
export interface ILineSegElement {
  id: number;
  type: string;
  lineSeg: ILineSeg;
}
export interface ILineSeg {
    pointA : IPoint;
    pointB : IPoint;
}

export interface IElement {
    id: number;
    type: string;
    pointElement?: IPointElement;
    lineSegElement?: ILineSegElement;
    zIndex: number;
}

export type TElementTypes= {
  point: 'string'
  lineSeg: 'string'
  polygon: 'string'
}

export enum elementTypes {
  point = 'point',
  lineSeg = 'lineSeg'
}