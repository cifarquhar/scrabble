import React, { Component } from "react"

import Square from "./Square"

class Column extends Component {

  constructor(props){
    super(props)
  }

  render(){

    // const squareNumbers = ["","","","","","","","","","","","","","","",]

    // const squares = squareNumbers.map((element, index) => {
    //   return(
    //     <Square
    //     key={index}
    //     columnID={this.props.columnID}
    //     squareID={index + 1}
    //     />
    //   )
    // })

    console.log(this.props.squares)
    return (
      <div className="column">
        {this.props.squares}
      </div>
    )
  }

}

export default Column