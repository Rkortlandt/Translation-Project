import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './css/MainPage.css'
import Nav from './Nav'
import OptionsBar from './OptionsBar'
import CordGrid from './CordGrid'
import ExplanationBar from './ExplanationBar'
import { modes, IModes } from './modules/Interfaces/IModes'
import {TElementTypes, elementTypes } from './modules/Interfaces/IElement'
import {lineSegElement} from "./modules/BasicElements/lineSegElement";
import {pointElement} from "./modules/BasicElements/pointElement";
import {updateHover} from "./modules/boundObjs";

export default function MainPage() {
  const [currentMode, setCurrentMode] = useState(modes.addPoints);
  const [hoverIndex, setHoverIndex] = useState(updateHover({
    x: 0,
    y: 0
  }));
  const handleModeChange = (newMode: string) => { 
    setCurrentMode(newMode);
    console.log(`Current Mode: ${currentMode}`)
  }
  const handleHoverIndex = (newHoverIndex: [pointElement[], lineSegElement[]]) => {
    setHoverIndex(newHoverIndex)
  }
  
  return (
    <div className="main-page">
      <Nav/>
      <div className='hero-container'>
        <OptionsBar mode={currentMode} onModeChange={handleModeChange}/>
        <CordGrid
          mode={currentMode}
          onModeChange={handleModeChange}
          hoverIndex={hoverIndex}
          setHoverIndex={handleHoverIndex}
        />
        <ExplanationBar mode={currentMode} onModeChange={handleModeChange}/>
      </div>
    </div>
  )
}

