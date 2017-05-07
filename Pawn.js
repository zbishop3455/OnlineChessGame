Pawn = function(team){
  this.type = 5;
  this.type = 0;
  this.team = team;
  this.hasMoved = false;
  if(team == 0){
    //white team
    this.picture = loadImage("images/pawn_white.png");
  }
  else{
    //black team
    this.picture = loadImage("images/pawn_black.png");
  }

  this.showMoves = function(rowIndex,columnIndex){
    //finds all possible move and stores tham in array to be drawn.
    //checks to see if they have clicked a possible move space, than moves the piece there

    var possibleMoves = [];
    var possibleAttacks = [];
    var clickedColumnIndex;
    var clickedRowIndex;

    //update arrays with moves
    try{
    if(chessBoard.chessData.get(rowIndex - 1,columnIndex) == null || undefined){
      if(! this.hasMoved){
        //pawns can move 2 spaces on their first move
        possibleMoves.push(rowIndex - 2, columnIndex);
      }
      //pawns can only move one space forward
      possibleMoves.push(rowIndex - 1,columnIndex);
      chessBoard.showMoves(possibleMoves,0);
    }
    //check forward left of pawn
    if(chessBoard.chessData.get(rowIndex-1,columnIndex-1) != null || undefined){
      if(chessBoard.chessData.get(rowIndex-1,columnIndex-1).getTeam() != this.team) {
        possibleAttacks.push(rowIndex - 1, columnIndex - 1);
      }
    }
    //check forward right of pawn
    if(chessBoard.chessData.get(rowIndex-1,columnIndex+1) != null || undefined){
      if(chessBoard.chessData.get(rowIndex-1,columnIndex+1).getTeam() != this.team){
        possibleAttacks.push(rowIndex - 1, columnIndex + 1);
      }
    }
    if(possibleAttacks.length > 0){
      //draw possibleAttacks
      chessBoard.showMoves(possibleAttacks,1);
    }
    }
    catch(e){
      print("Pawn has reached other side")
      pieceIsSelected = false;
    }


    //see if they clicked a cell that is a possible move
    if(mouseIsPressed && mouseY > 0 && mouseY < masterSize ){
      clickedColumnIndex = Math.floor(mouseX / chessBoard.gridSize);
      clickedRowIndex = Math.floor(mouseY / chessBoard.gridSize);

      for(var i=0;i<possibleMoves.length;i+=2){
        if(clickedColumnIndex  == possibleMoves[i+1]){
          if(clickedRowIndex  == possibleMoves[i]){
            //more piece
            chessBoard.movePiece(rowIndex,columnIndex,clickedRowIndex,clickedColumnIndex);
            this.hasMoved = true;
            pieceIsSelected = false;
          }
      }
    }

    //see if they clicked a call that is possible attack
    for(var i=0;i<possibleAttacks.length;i+=2){
      if(clickedColumnIndex  == possibleAttacks[i+1]){
        if(clickedRowIndex  == possibleAttacks[i]){
          //move piece
          chessBoard.movePiece(rowIndex,columnIndex,clickedRowIndex,clickedColumnIndex);
          this.hasMoved = true;
          pieceIsSelected = false;
        }
    }
  }

    //check to see if they clicked outside the current cell, if so, the user wants to select another piece
    if(clickedColumnIndex == columnIndex && clickedRowIndex == rowIndex){
    }else {
      pieceIsSelected = false;
    }

  }


}

this.getTeam = function(){
  return this.team;
}
}
