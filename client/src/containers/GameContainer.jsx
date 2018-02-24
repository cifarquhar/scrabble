import React, { Component } from "react"

import Board from "../components/Board"
import Rack from "../components/Rack"
import TILES from "../constants/Tiles"

class GameContainer extends Component {

  constructor(props){
    super(props)

    this.tiles = TILES
  }

  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  pickTiles(){
    let playerTiles = []
    for (let i = 0; i < 7; i++){
      let tileIndex = this.getRandomInt(0, this.tiles.length - 1)
      let randomTile = this.tiles.splice(tileIndex,1)
      playerTiles.push(randomTile[0])
    }
    return playerTiles
  }

  render(){

    console.log(this.tiles)

    let chosenTiles = this.pickTiles()

    console.log(chosenTiles)

    return (
      <div>
        <h1 className="heading-text">Welcome to Scrabble!</h1>
        <Board/>
        <Rack tiles={chosenTiles}/>
      </div>
    )
  }

}

export default GameContainer