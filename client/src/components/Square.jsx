import React, { Component } from "react"

class Square extends Component {

  constructor(props){
    super(props)

    if (props.tile){
      this.class = "square tile"
      this.value = props.tile.letter
    }
    else {
      this.coords = {
        row: props.squareID,
        column: props.columnID
      }

      this.class = "square"

      this.value = ""
    }
  }

  handleClick(){
    console.log(this.coords)
  }

  findClassName(){
    const r = this.coords.row;
    const c = this.coords.column;

    if ((r === 1 || r === 8 || r === 15) && (c === 1 || c === 8 || c === 15)){
      (r === 8 && c === 8) ? this.class += "" : this.class += " triple-word"
      this.value = "TW"
    }

    if (r === 2 && (c === 2 || c === 14) || r === 3 && (c === 3 || c === 13) || r === 4 && ( c === 4 || c === 12) 
      || r === 5 && (c === 5 || c === 11) || r === 8 && c === 8 || r === 11 && (c === 5 || c === 11) 
      || r === 12 && (c === 4 || c === 12) || r === 13 && (c === 3 || c === 13) || r === 14 && (c === 2 || c === 14)){
      this.class += " double-word"
    this.value = "DW"
  }

  if (r === 2 && (c === 6 || c === 10) || r === 6 && (c === 2 || c === 6 || c === 10 || c === 14) 
    || r === 10 && (c === 2 || c === 6 || c === 10 || c === 14) || r === 14 && (c === 6 || c === 10)){
    this.class += " triple-letter"
  this.value = "TL"
}

if (r === 1 && (c === 4 || c === 12) || r === 3 && (c === 7 || c === 9) || r === 4 && (c === 1 || c === 8 || c === 15)
  || r === 7 && (c === 3 || c === 7 || c === 9 || c === 13) || r === 8 && (c === 4 || c === 12) 
  || r === 9 && (c === 3 || c === 7 || c === 9 || c === 13) || r === 12 && (c === 1 || c === 8 || c === 15)
  || r === 13 && (c === 7 || c === 9) || r === 15 && (c === 4 || c === 12)){
  this.class += " double-letter"
this.value = "DL"
}

}


render(){

  if (!this.props.tile) this.findClassName()

  return (
    <div className={this.class} onClick={this.handleClick.bind(this)}>
      <div className="square-text">
        {this.value}
      </div>
    </div>
  )
}

}

export default Square