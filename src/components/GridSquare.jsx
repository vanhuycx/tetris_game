import React from "react";

// Represents a grid square with a color


const GridSquare = ({color}) => {
  const classes = `grid-square color-${color}`
  return <div className={classes}/>
}

export default GridSquare;
