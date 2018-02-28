import React, { Component } from "react"

import Board from "../components/Board"
import Rack from "../components/Rack"
import Tile from "../models/Tile"
import ALPHABET from "../constants/Alphabet"

class GameContainer extends Component {

  constructor(props){
    super(props)

    this.tiles = []

    this.state = {
      playerTiles: []
    }
  }


  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  pickTiles(num){
    let chosenTiles = this.state.playerTiles
    for (let i = 0; i < num; i++){
      let tileIndex = this.getRandomInt(0, this.tiles.length - 1)
      let randomTile = this.tiles.splice(tileIndex,1)
      chosenTiles.push(randomTile[0])
    }
    this.setState({playerTiles: chosenTiles})
  }


  generateTileset(){
    let tiles = []
    ALPHABET.forEach((letter) => {
      let i = 0
      while (i < letter.quantity) {
        tiles.push(new Tile(letter.letter, letter.value))
        i ++
      }
    })
    return tiles
  }


  startNewGame(){
    const check = confirm("Are you sure you want to start a new game?")
      if (check) {
        this.tiles = this.generateTileset()
        this.setState({playerTiles: []}, () => this.pickTiles(7))
        
      }
  }


  render(){
    return (
      <div>
        <h1 className="heading-text">Welcome to Scrabble!</h1>
        <Board/>
        <Rack tiles={this.state.playerTiles}/>
        <button onClick={this.startNewGame.bind(this)}>New Game</button>
      </div>
    )
  }

}

export default GameContainer