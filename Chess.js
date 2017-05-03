

//master demensions
masterWidth = 1200;
masterHeight = 800;
pieces = [];


function setup(){
  createCanvas(masterWidth,masterHeight);
  chessBoard = new board();
  //make pieces
  pieces.push(new King(0));
  pieces.push(new King(1));
  pieces.push(new Queen(0));
  pieces.push(new Queen(1));
}

function draw(){
  background(40);

  chessBoard.show();
}



board = function(){
  /*
    Chess board object
    Grid is drawn with pieces

    Data is stored in a p5 table
  */

  this.size = 600;
  this.gridSize = this.size / 8;
  this.topOffset = 100;
  this.sideOffset = 100;

  //make table
  chessTable = new p5.Table();
  letters = ['A','B','C','D','E','F','G','H'];

  for(var i=0; i<letters.length; i++){
    chessTable.addColumn(letters[i]);
    chessTable.addRow();
  }



  this.show = function(){
    //draw the table
    for(var i=0;i<chessTable.getColumnCount();i++){

      for(var j=0;j<chessTable.getRowCount();j++){
        noFill();
        stroke(255);
        rect(this.gridSize*j + this.sideOffset,this.gridSize*i+ this.topOffset,this.gridSize,this.gridSize);
      }
    }
  }

}
