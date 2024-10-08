import React, {useState} from 'react'
import './App.css'
import MainScreen from './components/MainScreen'
import MobileScreen from './components/MobileScreen'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  // Toggle between main screen (computer) and mobile view
  return (
    <div className="App">
      <h1>KBC-Style Quiz Game</h1>
      <button onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? 'Switch to Main Screen' : 'Switch to Mobile Screen'}
      </button>
      {isMobile ? <MobileScreen /> : <MainScreen />}
    </div>
  )
}

export default App
