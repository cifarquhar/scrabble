import React, { Component } from "react"

import Column from "./Column"

class Board extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const columnNumbers = ["","","","","","","","","","","","","","","",]

    const columns = columnNumbers.map((element, index) => {
      return(
        <Column
        key={index}
        columnID={index + 1}
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