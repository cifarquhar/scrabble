import React, { Component } from "react"

import Board from "../components/Board"
import TILES from "../constants/Tiles"

class GameContainer extends Component {

  constructor(props){
    super(props)

    this.tiles = TILES
  }

  render(){

    console.log(this.tiles)

    return (
      <div>
        <h1 className="heading-text">Welcome to Scrabble!</h1>
        <Board/>
      </div>
    )
  }

}

export default GameContainer