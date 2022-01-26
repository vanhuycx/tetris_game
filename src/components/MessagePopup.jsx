import React from "react";
import { useSelector } from "react-redux";

// Displays a message
const MessagePopup = () => {
  const isRunning = useSelector((state)=>state.game.isRunning)
  const gameOver = useSelector((state)=>state.game.gameOver)
  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game over'
    isHidden = ''
  } else if (!isRunning) {
    message = 'Paused'
    isHidden = ''
  }


  return (
  <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
  </div>

  )
};

export default MessagePopup;
