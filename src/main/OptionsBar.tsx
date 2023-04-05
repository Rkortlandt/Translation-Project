import react from 'react';
import './css/OptionsBar.css';
import { clearAll } from './modules/clearCanvas';
import { IModes, modes } from './modules/Interfaces/IModes';

export default function OptionsBar (props :{ mode: string, onModeChange: (newMode: string) => void}) {
    const handleAddLineSegmentClick = () => {
        props.onModeChange(modes.addLineSegment);
    }

    return (
        <div className="options-bar">
        <button type="button" className="options-button" id="clearcanvas">
          Reset 
          <i className="material-icons" /*onClick={clearAll()}*/ id="material-icons-button">clear_all</i>
        </button>
        <button type="button" className="options-button" id="shapify">
          Shapify
        </button>
        <button type="button" className="options-button" id="translate">
          Translate    
          Y: 
          <input
            id="MoveY"
            type="number"
            value="0"
            max="10"
            min="-10"
            // onChange={''}
          />
          X:
          <input
            id="MoveX"
            type="number"
            value="0"
            max="10"
            min="-10"
            // onChange={''}
          />
          <i className="material-icons" id="material-icons-button">open_with</i>
        </button>
        <button type="button" className="options-button" id="reflect">
          Reflect
          Y:
          <input
            id="reflectY"
            type="checkbox"
            value='false'
            // onChange={() => updateReflectY()}
          /> 
          X:
          <input
            id="reflectX"
            type="checkbox"
            value='false'
            // onChange={() => updateReflectX()}
          />
          <i className="material-icons" id="material-icons-button">flip</i>
        </button>
        <button type="button" className="options-button" id="rotate">
          Rotate
        </button>
        <button type="button" className="options-button" id="Dilation">
          Dilation
          <input
            id="scaleFactorFactor"
            type="number"
            value="1"
            min="0"
            max="5"
            step="0.5"
            // onChange={() => drawExampleShape()}
          />
          <i className="material-icons" id="material-icons-button">fit_screen</i>
        </button>
        <button type="button" className="options-button" onClick={handleAddLineSegmentClick} id="line">
          New line Segment 
          <i className="material-icons" id="material-icons-button">add</i>
        </button>
        <p>Grid Space</p>
        <input type="range" min="2" max="4" value="1" className="slider" id="myRange" />
      </div>
    );
}