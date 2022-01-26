import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {moveDown, moveLeft,moveRight,rotate} from '../actions'


const Controls = ({}) => {
  const dispatch = useDispatch()
  const isRunning = useSelector((state)=>state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver) 

  return (
      <div className="controls"> 
          <button  className="control-button" 
          disabled={!isRunning || gameOver}
          onClick={(e)=>{
            
            if (!isRunning || gameOver) { return } 
            dispatch(moveLeft())
            }}>Left</button >

          <button  className="control-button" 
          disabled={!isRunning || gameOver}
          onClick={(e)=>{
            if (!isRunning || gameOver) { return } 
            dispatch(moveRight())
            }}>Right</button >

          <button  className="control-button" 
          disabled={!isRunning || gameOver}
          onClick={(e)=>{
            if (!isRunning || gameOver) { return } 
            dispatch(rotate())
            }}>Rotate</button >

          <button  className="control-button" 
          disabled={!isRunning || gameOver}
          onClick={(e)=>{
            if (!isRunning || gameOver) { return } 
            dispatch(moveDown())
            }}>Down</button >
      </div>
  )
};

export default Controls;
