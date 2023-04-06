import { point } from './point.js';
import { line } from './line.js';
import { shape } from './shape.js'

export class element {
    id: number;
    type: string;
    element: point | line | shape;

    constructor(id: number, type: string, element: point | line | shape) {
        this.id = id;
        this.type = type;
        this.element = element;
    }

    get getPoint() {
        return {
            id: this.id,
            type: this.type,
            element: this.element,
        };
    }
}