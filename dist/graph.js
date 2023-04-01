/**
 * @param gridSpacing Spacing of the grid
 * @param stx Static canvas element
 */
export function initGraph(gridSpacing, stx) {
    //Main Lines
    console.log('initGraph Func Called');
    stx.translate(484 / 2, 484 / 2);
    stx.strokeStyle = "#000000";
    stx.beginPath();
    //line to right 
    stx.moveTo(0, 0);
    stx.lineTo(242 - 22, 0);
    stx.stroke();
    //line to left  
    stx.moveTo(0, 0);
    stx.lineTo(-242 + 22, 0);
    stx.stroke();
    //line down    
    stx.moveTo(0, 0);
    stx.lineTo(0, 242 - 22);
    stx.stroke();
    //line up    
    stx.moveTo(0, 0);
    stx.lineTo(0, -242 + 22);
    stx.stroke();
    //Black line markers----------------------------------------------------    
    for (let i = -10 * gridSpacing; i <= 10 * gridSpacing; i++) {
        let y = (-22 / gridSpacing) * i;
        let x = -10 / gridSpacing;
        let x2 = 10 / gridSpacing;
        stx.moveTo(x, y);
        stx.lineTo(x2, y);
        stx.stroke();
    }
    for (let i = -10 * gridSpacing; i <= 10 * gridSpacing; i++) {
        let x = (-22 / gridSpacing) * i;
        let y = -10 / gridSpacing;
        let y2 = 10 / gridSpacing;
        stx.moveTo(x, y);
        stx.lineTo(x, y2);
        stx.stroke();
    }
    stx.resetTransform();
    //All the little gray things-------------------------------------------
    for (let i = 0; i <= 20; i++) {
        if (i !== 10) {
            var ydash = 22 + i * 22;
            for (let i = 0; i <= 20; i++) {
                if (i !== 10) {
                    let x = 20 + i * 22;
                    let x2 = 24 + i * 22;
                    stx.beginPath();
                    stx.strokeStyle = "#bdbdbd";
                    stx.moveTo(x, ydash);
                    stx.lineTo(x2, ydash);
                    stx.stroke();
                }
                else {
                    console.log("X skipped");
                }
            }
        }
        else {
            console.log("Y skipped");
        }
    }
}
//# sourceMappingURL=graph.js.map