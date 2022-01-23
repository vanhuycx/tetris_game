import React from "react";

const ScoreBoard = ({score}) => {
  return (
      <div className="score-board">
          <div>Score: {score}</div>
          <div>Level: 1</div>
          <button className="score-board-button" onClick={(e)=>{}}>Play</button>
          <button className="score-board-button" onClick={(e)=>{}}>Restart</button>
      </div>
  )
};

export default ScoreBoard;
