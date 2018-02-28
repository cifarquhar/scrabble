import React, { Component } from "react"

import Column from "./Column"

class Board extends Component {

  constructor(props){
    super(props)
  }

  render(){

    let filteredSquares = []

    for (let i = 1; i <= 15; i++){
      let matchingSquares = this.props.squares.filter(square => square.props.columnID === i)
      console.log(matchingSquares)
      filteredSquares.push(matchingSquares)
    }

    console.log(filteredSquares)

    const columns = filteredSquares.map((element, index) => {
      return(
        <Column
          key={index}
          squares={element}
        />
        )
    })

    return (
      <div className="board">
        {columns}
      </div>
      )
  }

}

export default Board