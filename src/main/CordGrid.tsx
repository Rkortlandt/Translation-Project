import React, {useEffect, useRef} from 'react';
import './css/CordGrid.css';
import {initGraph} from './modules/graph';
import {handleAddLineSegment, handleAddPoint} from './modules/handleClick';
import windowToCanvas from './modules/windowToCanvas';
import {modes} from './modules/Interfaces/IModes';
import {IElement, IPointElement} from './modules/Interfaces/IElement';
import {clearAll, clearCanvases, clearNonStatic} from './modules/clearCanvas';
import {renderLines, renderPoints} from './modules/renderElements';
import { pointElement } from './modules/BasicElements/pointElement';
import {updateHover} from "./modules/boundObjs";
import {lineSegElement} from "./modules/BasicElements/lineSegElement";
export default function CordGrid (props : {mode: string, onModeChange: (newMode: string) => void, hoverIndex: [pointElement[], lineSegElement[]], setHoverIndex : (newHoverIndex: [pointElement[], lineSegElement[]]) => void}) {
  //TODO use props to update grid spacing
  const gridSpaceing: number = 1;

  const gridCanvasRef = useRef<HTMLCanvasElement>(null);
  const pointCanvasRef = useRef<HTMLCanvasElement>(null);
  const linesCanvasRef = useRef<HTMLCanvasElement>(null);
  const markingsCanvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = previewCanvasRef;

  const render = () => {
    const gridCanvas : CanvasRenderingContext2D | null | undefined = gridCanvasRef.current?.getContext('2d');
    const pointCanvas : CanvasRenderingContext2D | null | undefined = pointCanvasRef.current?.getContext('2d');
    const linesCanvas : CanvasRenderingContext2D | null | undefined = linesCanvasRef.current?.getContext('2d');
    const markingsCanvas : CanvasRenderingContext2D | null | undefined = markingsCanvasRef.current?.getContext('2d');
    const previewCanvas : CanvasRenderingContext2D | null | undefined = previewCanvasRef.current?.getContext('2d');
    const canvas = previewCanvasRef.current;
    if (gridCanvas && pointCanvas && linesCanvas && markingsCanvas && previewCanvas && canvas) {
      clearNonStatic(linesCanvas, pointCanvas, markingsCanvas, canvas);
      renderPoints(pointCanvas);
      renderLines(linesCanvas, gridSpaceing);
    }
  };
  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    const gridCanvas = gridCanvasRef.current?.getContext('2d');
    if (gridCanvas) {
      initGraph(gridSpaceing, gridCanvas);
    }
  }, [gridSpaceing]);

  useEffect(() => {
    const gridCanvas = gridCanvasRef.current?.getContext('2d');
    const pointCanvas = pointCanvasRef.current?.getContext('2d');
    const linesCanvas = linesCanvasRef.current?.getContext('2d');
    const markingsCanvas = markingsCanvasRef.current?.getContext('2d');
    const previewCanvas = previewCanvasRef.current?.getContext('2d');
    const canvas = previewCanvasRef.current;

    console.log(`Current Mode UseEffect: ${props.mode}`)
    if (gridCanvas && pointCanvas && linesCanvas && markingsCanvas && previewCanvas && canvas) {
      if (props.mode === modes.reset) {
        clearAll(gridCanvas, pointCanvas, linesCanvas, markingsCanvas, previewCanvas, canvas);
        initGraph(gridSpaceing, gridCanvas);
        props.onModeChange(modes.addPoints);
      }
    }
  }, [props.mode]);
  //variables for lineSegElement segment
  let pointsSelectedLineSeg: number = 0, selectedPointA: IPointElement | undefined;

  const handlePreviewClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const previewCanvas = previewCanvasRef.current?.getContext('2d');
    const canvasMousePos = windowToCanvas(canvas, event.clientX, event.clientY);
      switch (props.mode) {
        case modes.addPoints:
          handleAddPoint(canvasMousePos, gridSpaceing);
          break;
        case modes.addLineSegment:
          let mHandleAddLineSegment = handleAddLineSegment(canvasMousePos, gridSpaceing, pointsSelectedLineSeg, previewCanvas, canvas, selectedPointA);
          pointsSelectedLineSeg = mHandleAddLineSegment.pointsSelectedLineSeg;
          props.onModeChange(mHandleAddLineSegment.currentMode);
          selectedPointA = mHandleAddLineSegment.selectedPointA;
          break;
        default:
          console.error('No mode selected')
          break;
    }
  };
  const handleCanvasMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const previewCanvas = previewCanvasRef.current?.getContext('2d');
    const canvasMousePos = windowToCanvas(canvas, event.clientX, event.clientY);

    let hover = updateHover(canvasMousePos);
    props.setHoverIndex(hover);

    // console.log('moveing')
    // for (let key in sessionStorage) {
    //   let mElement = JSON.parse(sessionStorage.getItem(key) as string);
    //   if (mElement === null) {
    //     continue
    //   }
    //   if (mElement.type === 'point' && 'pointElement' in mElement) {
    //     let mWindowToCanvas = windowToCanvas(canvas, event.clientX, event.clientY);
    //     const pointXY = {x: mWindowToCanvas.x, y: mWindowToCanvas.y};
    //     // console.log(pointElement.distanceToObj(pointXY, mPoint.pointCords));
    //     if (pointElement.distanceToObj(pointXY, mElement.pointElement.pointCords) < 7) {
    //       console.log(`pointElement hovered ${key}`);
    //     }
    //     continue;
    //   }
    //   if (mElement.type === 'lineSegment' && 'lineSegElement' in mElement.element) {
    //     console.log('lineSegElement segment');
    //   }
    // }

  }

  return(
    <div className="gridbar">
      <div className="canvas-wrapper">
        <canvas className='canvas' id='grid' height="484" width="484" ref={gridCanvasRef}></canvas>
        <canvas className='canvas' id='point' height="484" width="484" ref={pointCanvasRef}></canvas>
        <canvas className='canvas' id='lines' height="484" width="484" ref={linesCanvasRef}></canvas>
        <canvas className='canvas' id='markings' height="484" width="484" ref={markingsCanvasRef}></canvas>
        <canvas className='canvas' id='preview' height="484" width="484" ref={previewCanvasRef} onClick={handlePreviewClick} onMouseMove={handleCanvasMove}></canvas>
      </div>
    </div>
  );
}

