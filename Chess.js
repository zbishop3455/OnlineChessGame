

//master demensions
masterWidth = 1200;
masterHeight = 800;


function setup(){
  createCanvas(masterWidth,masterHeight);
  chessBoard = new board();
}

function draw(){
  background(0);

  //chessBoard.show();
}



board = function(){
  /*
    Chess board object
    Grid is drawn with pieces

    Data is stored in a p5 table
  */

  this.size = 600;
  this.gridSize = this.size / 8;

  //make table
  chessTable = new p5.Table(8);
  letters = ['A','B','C','D','E','F','G','H'];
  for(var i=0; i<letters.length; i++){
    chessTable.addColumn(letters[i]);
  }



  this.show = function(){
    //draw the table

    for(var i =0; i<8;i++){
      //
    }
  }
}
