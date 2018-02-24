import Tile from "../models/Tile"

const alphabet = [
  {
    letter: "A",
    value: 1,
    quantity: 9
  },  
  {
    letter: "B",
    value: 3,
    quantity: 2
  },  
  {
    letter: "C",
    value: 3,
    quantity: 2
  },  
  {
    letter: "D",
    value: 2,
    quantity: 4
  },  
  {
    letter: "E",
    value: 1,
    quantity: 12
  },  
  {
    letter: "F",
    value: 4,
    quantity: 2
  },  
  {
    letter: "G",
    value: 2,
    quantity: 3
  },  
  {
    letter: "H",
    value: 4,
    quantity: 2
  },  
  {
    letter: "I",
    value: 1,
    quantity: 9
  },  
  {
    letter: "J",
    value: 8,
    quantity: 1
  },  
  {
    letter: "K",
    value: 5,
    quantity: 1
  },  
  {
    letter: "L",
    value: 1,
    quantity: 4
  },  
  {
    letter: "M",
    value: 3,
    quantity: 2
  },  
  {
    letter: "N",
    value: 1,
    quantity: 6
  },  
  {
    letter: "O",
    value: 1,
    quantity: 8
  },  
  {
    letter: "P",
    value: 3,
    quantity: 2
  },  
  {
    letter: "Q",
    value: 10,
    quantity: 1
  },  
  {
    letter: "R",
    value: 1,
    quantity: 6
  },  
  {
    letter: "S",
    value: 1,
    quantity: 4
  },  
  {
    letter: "T",
    value: 1,
    quantity: 6
  },  
  {
    letter: "U",
    value:  1,
    quantity: 4
  },  
  {
    letter: "V",
    value: 4,
    quantity: 2
  },  
  {
    letter: "W",
    value: 4,
    quantity: 2
  },  
  {
    letter: "X",
    value: 8,
    quantity: 1
  },  
  {
    letter: "Y",
    value: 4,
    quantity: 2
  },  
  {
    letter: "Z",
    value: 10,
    quantity: 1
  },  {
    letter: "",
    value: null,
    quantity: 2
  },
]

// alphabet.forEach((letter) => {
//   let i = 0
//   while (i < letter.quantity) {
//     TILES.push(new Tile(letter.letter, letter.value))
//     i ++
//   }
// })

function generateTileset(){
  let tiles = []
  alphabet.forEach((letter) => {
    let i = 0
    while (i < letter.quantity) {
      tiles.push(new Tile(letter.letter, letter.value))
      i ++
    }
  })
  return tiles
}

let TILES = generateTileset()

export default TILES