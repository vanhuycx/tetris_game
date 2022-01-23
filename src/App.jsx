import React from "react"
import './App.css'
import GridSquare from "./components/GridSquare"
import GridBoard from "./components/GridBoard"

const App = () => {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Tetris</h1>
        </header>

        <GridBoard/>
          
      </div>
      
  )
}

export default App
