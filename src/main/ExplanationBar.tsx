import React, {useState} from 'react';
import './css/ExplanationBar.css';
import {IModes, Modes, modes} from "./modules/Interfaces/IModes";

export default function ExplanationBar(props : {mode: string, onModeChange: (newMode: string) => void}) {
  const [activeTab, setActiveTab] = useState('properties');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const tab : string = event.currentTarget.getAttribute('data-tab') || '';
    setActiveTab(tab);
  };
  
  function renderModeExplanation (mode: string) : JSX.Element {
    switch (mode) {
      case modes.addPoints:
        return (
            <p>Your Currently in the add Points mode. (This is the Default Mode)
              <br></br>
              In this mode you can add Points by clicking anywere on the canvas
              <br></br>
              If you click on a point it will be removed
            </p>
        );
      case modes.addLineSegment:
        return (<p>Your Currently in the add line Segments mode. In this mode you can add Line Segments by clicking on two points</p>);
      default:
        return (<p>There was an error and the Current Mode is unkown</p>);
    }
  }

  return (
    <div className="explanationbar">
      <div className="rightSideBar-selector">
        <button
          className={`tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
          data-tab="properties"
          onClick={handleClick}
        >
          Properties
        </button>
        <button
          className={`tab-btn ${activeTab === 'explanation' ? 'active' : ''}`}
          data-tab="explanation"
          onClick={handleClick}
        >
          Explanation
        </button>
      </div>
      <div className={`Properties tab-content ${activeTab === 'properties' ? 'active' : ''}`}>
        <p>Properties</p>
        <p>Application Mode is {props.mode}</p>
      </div>
      <div className={`Explanation tab-content ${activeTab === 'explanation' ? 'active' : ''}`}>
        <p>
          Explanation
          <div>{renderModeExplanation(props.mode)}</div>
        </p>
      </div>
    </div>
  );
}