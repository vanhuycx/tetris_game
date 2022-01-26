import React from "react";
import GridSquare from "./GridSquare";
import { useSelector } from "react-redux";
import { shapes } from "../utils";

// Draws the "next" block view showing the next block to drop
const NextBlock = ({}) => {
    // const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]

    const nextShape = useSelector((state)=>state.game.nextShape)
    const box = shapes[nextShape][0] // Get the first rotation

    //Map the block to the grid
    const grid = box.map((rowArray,row)=>{
        return rowArray.map((square,col)=>{
            return <GridSquare key={`${row}${col}`} color={square===0 ? 0 : nextShape}/>
        })
    })

  return (
      <div className="next-block">
          {grid}
      </div>
  )
};

export default NextBlock;
