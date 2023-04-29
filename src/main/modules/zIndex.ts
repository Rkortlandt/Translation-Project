// Define the range of z-index values for each element type
import {IElement} from "./Interfaces/IElement";
import {ElementType} from "./Interfaces/IElement";


type IzIndexRanges = {
  [elementType in ElementType]: [number, number];
};

const zIndexRanges : IzIndexRanges = {
  point: [0, 99],
  lineSegment: [100, 199],
  shape: [200, 299],
  // Add other shapes and their corresponding z-index ranges here
};


export function assineIndexes() {
// Assign z-index values to elements
  let zindex = 0;
  for (let key in sessionStorage) {
    let element: IElement = JSON.parse(sessionStorage.getItem(key) as string);
    if (element === null) {
      continue;
    }
    // Set the z-index based on the element type
    const [minZIndex, maxZIndex] = zIndexRanges[element.type];
    element.zIndex = zindex + minZIndex;
    zindex++;
    // Save the updated element to sessionStorage
    sessionStorage.setItem(key, JSON.stringify(element));
  }
}
