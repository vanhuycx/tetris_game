// Libraries
import React, { createFactory } from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from './reducers'

// CSS
import './App.css'

// Components
import GridBoard from "./components/GridBoard"
import NextBlock from "./components/NextBlock"
import ScoreBoard from "./components/ScoreBoard"
import Controls from "./components/Controls"
import MessagePopup from "./components/MessagePopup"

const store = createStore(reducers)

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
