

//master demensions
masterSize = 800;
letters = ['A','B','C','D','E','F','G','H'];
whiteOrBlackGame = 0;

function setup(){
  createCanvas(masterSize,masterSize);
  chessBoard = new board();
  //make pieces and add them to the board

  if(whiteOrBlackGame == 1){
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

}

function showPiece(piece){

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
    for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        noFill();
        stroke(255);
        rect(this.gridSize*j + this.sideOffset,this.gridSize*i+ this.topOffset,this.gridSize,this.gridSize);
      }
    }

    //draw all pieces

    //loop through all pieces
    for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        //if there is a piece
        if(this.chessData.get(i,j) != undefined){
          //there is a piece, draw it
          currentPiece = this.chessData.get(i,j);
          img = currentPiece.picture;
          image(img,j*this.gridSize,i*this.gridSize,100,100);

        }
      }
    }

  }

}
