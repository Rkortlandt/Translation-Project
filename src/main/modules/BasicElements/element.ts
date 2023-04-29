import { pointElement } from './pointElement';
import { lineSegElement } from './lineSegElement';
import { shape } from './shape.js'

export class element {
    id: number;
    type: string;
    element: pointElement | lineSegElement | shape;
    zIndex: number;

    constructor(id: number, type: string, element: pointElement | lineSegElement | shape) {
        this.id = id;
        this.type = type;
        this.element = element;
        this.zIndex = 0;
    }
    set SetzIndex(newZIndex : number) {
      this.zIndex = newZIndex
    }
    get getPoint() {
        return {
            id: this.id,
            type: this.type,
            element: this.element,
            zIndex: this.zIndex,
        };
    }
}