export class element {
    id;
    type;
    element;
    constructor(id, type, element) {
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
//# sourceMappingURL=element.js.map