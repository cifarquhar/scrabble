import React, { Component } from "react"

class Square extends Component {

  constructor(props){
    super(props)

    this.coords = {
      row: this.props.squareID,
      column: this.props.columnID
    }
  }

  handleClick(){
    console.log(this.coords)
  }

  render(){
    return (
      <div className="square" onClick={this.handleClick.bind(this)}></div>
    )
  }

}

export default Square