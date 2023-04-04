import { point } from '../BasicElements/point';
import { line } from '../BasicElements/line';
import { shape } from '../BasicElements/shape';
export interface IPointElement {
    id: number;
    type: string;
    element: point;
}
export interface ILineElement {
    id: number;
    type: string;
    element: line;
}
export interface IShapeElement {
    id: number;
    type: string;
    element: shape;
}
export interface IElement {
    id: number;
    type: string;
    element: any;
}