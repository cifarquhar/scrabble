import React, { Component } from "react"
import Board from "../components/Board"

class GameContainer extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1 className="heading-text">Welcome to Scrabble!</h1>
        <Board/>
      </div>
    )
  }

}

export default GameContainer