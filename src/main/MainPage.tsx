import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './css/MainPage.css'
import Nav from './Nav'
import OptionsBar from './OptionsBar'
import CordGrid from './CordGrid'
import ExplanationBar from './ExplanationBar'
import { modes, IModes } from './modules/Interfaces/IModes'

export default function MainPage() {
  const [currentMode, setCurrentMode] = useState(modes.addPoints);

  const handleModeChange = (newMode: string) => { 
    setCurrentMode(newMode);
    console.log(`Current Mode: ${currentMode}`)
  }
  
  return (
    <div className="main-page">
      <Nav/>
      <div className='hero-container'>
        <OptionsBar mode={currentMode} onModeChange={handleModeChange}/>
        <CordGrid mode={currentMode} onModeChange={handleModeChange}/>
        <ExplanationBar/>
      </div>
    </div>
  )
}

