import React, { useRef, useEffect } from 'react';
import './css/CordGrid.css';
import { initGraph } from './modules/graph';
import { handleAddPoint, handleAddLineSegment } from './modules/handleClick';
import windowToCanvas from './modules/windowToCanvas';
import { modes } from './modules/Interfaces/IModes';
import { IElement } from './modules/Interfaces/IElement';
import { clearAll } from './modules/clearCanvas';
import { renderPoints } from './modules/renderElements';

export default function CordGrid (props : {mode: string, onModeChange: (newMode: string) => void}) {
  var gridSpaceing: number = 1;
 
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const staticCanvasRef = useRef<HTMLCanvasElement>(null);
  const pointCanvasRef = useRef<HTMLCanvasElement>(null);
  const linesCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = previewCanvasRef;
  useEffect(() => {
    const staticCanvas = staticCanvasRef.current?.getContext('2d');
    if (staticCanvas) {
      initGraph(gridSpaceing, staticCanvas);
    }
  }, [gridSpaceing]);

  useEffect(() => {
    console.log(`Current Mode UseEffect: ${props.mode}`)
  }, [props.mode]);

  //variables for line segment
  var pointsSelectedLineSeg: number = 0;
  var selectedPointA: IElement;
  var selectedPointB: IElement;


  const handlePreviewClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const previewCanvas : CanvasRenderingContext2D | null | undefined = previewCanvasRef.current?.getContext('2d');
    const staticCanvas : CanvasRenderingContext2D | null | undefined = staticCanvasRef.current?.getContext('2d');
    const pointCanvas : CanvasRenderingContext2D | null | undefined = pointCanvasRef.current?.getContext('2d');
    const linesCanvas : CanvasRenderingContext2D | null | undefined = linesCanvasRef.current?.getContext('2d');
    const canvas = event.currentTarget;

    const canvasMousePos = windowToCanvas(canvas, event.clientX, event.clientY);
    if (previewCanvas && staticCanvas && pointCanvas && linesCanvas) {
      switch (props.mode) {
        case modes.addPoints:
          handleAddPoint(canvasMousePos, canvas, pointCanvas, gridSpaceing, linesCanvas);
          break;
        case modes.addLineSegment:
          let mHandleAddLineSegment = handleAddLineSegment(canvasMousePos, canvas, linesCanvas, gridSpaceing, pointsSelectedLineSeg, previewCanvas, selectedPointA);
          pointsSelectedLineSeg = mHandleAddLineSegment.pointsSelectedLineSeg;
          props.onModeChange(mHandleAddLineSegment.currentMode);
          selectedPointA = mHandleAddLineSegment.selectedPointA;
          renderPoints(pointCanvas, gridSpaceing);
          break;
        default:
          console.error('No mode selected')
          break;
      }
    }
  };

  return(
    <div className="gridbar">
      <div className="canvas-wrapper">
        <canvas className='canvas' id='static' height="484" width="484" ref={staticCanvasRef}></canvas>
        <canvas className='canvas' id='dynamic' height="484" width="484" ref={pointCanvasRef}></canvas>
        <canvas className='canvas' id='lines' height="484" width="484" ref={linesCanvasRef}></canvas>
        <canvas className='canvas' id='preview' height="484" width="484" ref={previewCanvasRef} onClick={handlePreviewClick}></canvas>
      </div>
    </div>
  );
}
