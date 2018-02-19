import React, { Component } from "react"

import Square from "./Square"

class Rack extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const tiles = this.props.tiles.map((element, index) => {
      return(
        <Square
          key={index}
          tile={element}
        />
      )
    })

    return(
      <div className="rack">
        {tiles}
      </div>
    )
  }
}

export default Rack