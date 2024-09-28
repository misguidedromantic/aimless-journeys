let svg = {}
let blocks = {}

window.onload = function (){setup()}

function setup(){
  addBlocks()
  console.log(blocks)
}

function addBlocks(){

  blocks.1 = new block ("Block 1", "yellow", 1)
  
  
}

class block {
  
  constructor(name, colour, height){
    this.name = name
    this.colour = colour
    this.height = height
  }

}
