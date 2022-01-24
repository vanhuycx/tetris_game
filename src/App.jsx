import React from "react"
import './App.css'

import GridBoard from "./components/GridBoard"
import NextBlock from "./components/NextBlock"
import ScoreBoard from "./components/ScoreBoard"
import Controls from "./components/Controls"

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
      </div>
  )
}

export default App
