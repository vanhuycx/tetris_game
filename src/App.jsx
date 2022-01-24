import React from "react"
import './App.css'

import GridBoard from "./components/GridBoard"
import NextBlock from "./components/NextBlock"
import ScoreBoard from "./components/ScoreBoard"
import Controls from "./components/Controls"
import MessagePopup from "./components/MessagePopup"


const App = () => {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Tetris</h1>
        </header>

        <GridBoard/>
        <NextBlock/>
        <ScoreBoard/>
        <Controls/>
        <MessagePopup/>
      </div>
  )
}

export default App
