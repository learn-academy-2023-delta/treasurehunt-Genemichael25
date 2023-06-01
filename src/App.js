import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  
  // while(bombLocation === treasureLocation) {
  //   setTreasureLocation(Math.floor(Math.random() * board.length))
  // }
  console.log("bomb location:", bombLocation)
  console.log("treasure location:", treasureLocation)

  const handleGamePlay = (index) => {
    // create a variable with a copy of our board state variable so we arent modifying state exactly
    let updatedBoard = [...board]
    if(index === treasureLocation) {
      updatedBoard[index] = "💰"
    } else if(index === bombLocation) {
      updatedBoard[index] = "☠️"
    } 
    else {
    // extracting a value of the square being clicked on and reassigning to a tree emoji 
    updatedBoard[index] = "🌳"
    }
    // use our method to update state with the copy (updatedBoard)
    setBoard(updatedBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return(
            <Square 
              value={value}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
            />
          )})}
      </div>
    </>
  )
}

export default App
