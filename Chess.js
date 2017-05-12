/*
  Zachary Bishop
  Chess Engine

  This program is a basic chess Engine

  There are a few things to make better such as the repeated move checking code found in each piece
*/
var masterSize = 800;
var letters = ['A','B','C','D','E','F','G','H'];
var BlackOrWhiteGame = 0;
var pieceIsSelected = false;
var pieceWasJustSelected = false;
var columnIndex = 0;
var rowIndex;
var selectedPiece;

function setup(){
  createCanvas(masterSize,masterSize);
  chessBoard = new board();

  //make pieces and add them to the board

  if(BlackOrWhiteGame == 1){
    //Black game
    chessBoard.chessData.set(0,"E",new King(0));
    chessBoard.chessData.set(7,"E",new King(1));

    chessBoard.chessData.set(0,"D",new Queen(0));
    chessBoard.chessData.set(7,"D",new Queen(1));

    chessBoard.chessData.set(0,"C",new Bishop(0));
    chessBoard.chessData.set(0,"F",new Bishop(0));
    chessBoard.chessData.set(7,"C",new Bishop(1));
    chessBoard.chessData.set(7,"F",new Bishop(1));

    chessBoard.chessData.set(0,"B",new Knight(0));
    chessBoard.chessData.set(0,"G",new Knight(0));
    chessBoard.chessData.set(7,"B",new Knight(1));
    chessBoard.chessData.set(7,"G",new Knight(1));

    chessBoard.chessData.set(0,"A",new Rook(0));
    chessBoard.chessData.set(0,"H",new Rook(0));
    chessBoard.chessData.set(7,"A",new Rook(1));
    chessBoard.chessData.set(7,"H",new Rook(1));

    for(var i=0;i<8;i++){
      chessBoard.chessData.set(1,letters[i],new Pawn(0));
      chessBoard.chessData.set(6,letters[i],new Pawn(1));
    }
  }else{
    //White Game
    chessBoard.chessData.set(0,"E",new King(1));
    chessBoard.chessData.set(7,"E",new King(0));

    chessBoard.chessData.set(0,"D",new Queen(1));
    chessBoard.chessData.set(7,"D",new Queen(0));

    chessBoard.chessData.set(0,"C",new Bishop(1));
    chessBoard.chessData.set(0,"F",new Bishop(1));
    chessBoard.chessData.set(7,"C",new Bishop(0));
    chessBoard.chessData.set(7,"F",new Bishop(0));

    chessBoard.chessData.set(0,"B",new Knight(1));
    chessBoard.chessData.set(0,"G",new Knight(1));
    chessBoard.chessData.set(7,"B",new Knight(0));
    chessBoard.chessData.set(7,"G",new Knight(0));

    chessBoard.chessData.set(0,"A",new Rook(1));
    chessBoard.chessData.set(0,"H",new Rook(1));
    chessBoard.chessData.set(7,"A",new Rook(0));
    chessBoard.chessData.set(7,"H",new Rook(0));

    for(var i=0;i<8;i++){
      chessBoard.chessData.set(1,letters[i],new Pawn(1));
      chessBoard.chessData.set(6,letters[i],new Pawn(0));
    }
  }

}

function draw(){
  background(60);
  chessBoard.show();
  checkIfSelected();
}

function checkIfSelected(){

  var scale = chessBoard.gridSize;

  if(!pieceIsSelected){
    if(mouseIsPressed && mouseY > 0 && mouseY < masterSize ){
    //check to see if they clicked a piece

      //find x and y
      columnIndex = Math.floor(mouseX / scale);
      rowIndex = Math.floor(mouseY / scale);
      selecedPiece = chessBoard.chessData.get(rowIndex,columnIndex);

      //see if a piece is there
      if(selecedPiece != null || undefined){
        //is that piece ours
        if(selecedPiece.getTeam() == BlackOrWhiteGame){
          //yes, there is a piece; change the color of the piece's cell so the user knows they have selected
          pieceIsSelected = true;
        }else {
          pieceIsSelected = false;
        }
      }
      else {
        pieceIsSelected = false;
      }
    }
  }

  //change color of selected cell
  if(pieceIsSelected){
    strokeWeight(4);
    stroke("green");
    noFill();
    rect(columnIndex * scale, rowIndex * scale, scale, scale);

    if(selecedPiece != null || undefined){
      if(selecedPiece.getTeam() == BlackOrWhiteGame){
      selecedPiece.showMoves(rowIndex,columnIndex);
      }
    }
  }
}



board = function(){
  /*
    Chess board object
    Grid is drawn with pieces

    Data is stored in a p5 table
  */

  //make table
  this.chessData = new p5.Table();
  //add col and new rows
  for(var i=0;i<8;i++){
    this.chessData.addRow();
    this.chessData.addColumn(letters[i]);
  }


  //draw grid
  this.size = masterSize;
  this.gridSize = this.size / 8;
  this.topOffset = 0;
  this.sideOffset = 0;

  this.show = function(){
    //draw the grid
    strokeWeight(1);

    for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        stroke(255);
        if(i%2 == j%2){
          fill(150);
        }else {
          fill(100);
        }
        rect(this.gridSize*j + this.sideOffset,this.gridSize*i+ this.topOffset,this.gridSize,this.gridSize);
      }
    }

    //draw all pieces

    //loop through all pieces
    for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        //if there is a piece
        if(this.chessData.get(i,j) != undefined || null){
          //there is a piece, draw it
          currentPiece = this.chessData.get(i,j);
          img = currentPiece.picture;
          image(img,j*this.gridSize,i*this.gridSize,100,100);
        }
      }
    }

  }

  this.showMoves = function(array,moveOrAttack){
    //takes an array of locations and draws them
    if(moveOrAttack == 0){
      //drawing a move
      fill(10,10,200,45);
    }
    else {
      fill(200,10,10, 45);
    }

    for(var i =0;i<array.length;i+=2){
      strokeWeight(4);
      rect(array[i+1]*this.gridSize,array[i]*this.gridSize,this.gridSize,this.gridSize);
    }
  }

  this.movePiece = function(oldRow,oldColumn,newRow,newColumn){
    //handles moving pieces and deleting old ones

    //if attacking, remove the piece we are attacking
    if(this.chessData.get(newRow,newColumn) != null || undefined){
      this.chessData.set(newRow,newColumn,null);
    }
      //move piece and delete old one
      this.chessData.set(newRow,newColumn,this.chessData.get(oldRow,oldColumn));
      this.chessData.set(oldRow,oldColumn,null);


  }

}
