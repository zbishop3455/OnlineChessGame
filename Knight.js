Knight = function(team){

  this.type = 3;
  this.team = team;
  if(team == 0){
    //white team
    this.picture = loadImage("images/knight_white.png");
  }
  else{
    //black team
    this.picture = loadImage("images/knight_black.png");
  }

  this.getTeam = function(){
    return this.team;
  }

  this.showMoves = function(rowIndex,columnIndex){
    var possibleMoves = [];
    var possibleAttacks = [];
    var clickedColumnIndex;
    var clickedRowIndex;

    //up 1 right 2
    if(rowIndex -1 > -1 && columnIndex + 2 < 8){
      if(chessBoard.chessData.get(rowIndex-1,columnIndex+2) == null || undefined){
        possibleMoves.push(rowIndex -1,columnIndex+2);
      }
      else {
        if(chessBoard.chessData.get(rowIndex -1,columnIndex+2).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex -1,columnIndex+2);
        }
      }
    }

    //up 1 left 2
    if(rowIndex -1 > -1 && columnIndex - 2 > -1){
      if(chessBoard.chessData.get(rowIndex-1,columnIndex-2) == null || undefined){
        possibleMoves.push(rowIndex -1,columnIndex-2);
      }
      else {
        if(chessBoard.chessData.get(rowIndex -1,columnIndex-2).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex -1,columnIndex-2);
        }
      }
    }

    //up 2 right 1
    if(rowIndex -2 > -1 && columnIndex + 1 < 8){
      if(chessBoard.chessData.get(rowIndex-2,columnIndex+1) == null || undefined){
        possibleMoves.push(rowIndex -2,columnIndex+1);
      }
      else {
        if(chessBoard.chessData.get(rowIndex -2,columnIndex+1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex -2,columnIndex+1);
        }
      }
    }

    //up 2 left 1
    if(rowIndex -2 > -1 && columnIndex - 1 < 8){
      if(chessBoard.chessData.get(rowIndex-2,columnIndex-1) == null || undefined){
        possibleMoves.push(rowIndex -2,columnIndex-1);
      }
      else {
        if(chessBoard.chessData.get(rowIndex -2,columnIndex-1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex -2,columnIndex-1);
        }
      }
    }

    //down 1 right 2
    if(rowIndex +1 < 8 && columnIndex + 2 < 8){
      if(chessBoard.chessData.get(rowIndex+1,columnIndex+2) == null || undefined){
        possibleMoves.push(rowIndex +1,columnIndex+2);
      }
      else {
        if(chessBoard.chessData.get(rowIndex +1,columnIndex+2).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex +1,columnIndex+2);
        }
      }
    }

    //down 1 left 2
    if(rowIndex +1 < 8 && columnIndex - 2 > -1){
      if(chessBoard.chessData.get(rowIndex+1,columnIndex-2) == null || undefined){
        possibleMoves.push(rowIndex +1,columnIndex-2);
      }
      else {
        if(chessBoard.chessData.get(rowIndex +1,columnIndex-2).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex +1,columnIndex-2);
        }
      }
    }

    //down 2 right 1
    if(rowIndex +2 < 8 && columnIndex + 1 < 8){
      if(chessBoard.chessData.get(rowIndex+2,columnIndex+1) == null || undefined){
        possibleMoves.push(rowIndex +2,columnIndex+1);
      }
      else {
        if(chessBoard.chessData.get(rowIndex +2,columnIndex+1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex +2,columnIndex+1);
        }
      }
    }

    //down 2 left 1
    if(rowIndex +2 < 8 && columnIndex - 1 > -1){
      if(chessBoard.chessData.get(rowIndex+2,columnIndex-1) == null || undefined){
        possibleMoves.push(rowIndex +2,columnIndex-1);
      }
      else {
        if(chessBoard.chessData.get(rowIndex +2,columnIndex-1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex +2,columnIndex-1);
        }
      }
    }


  if(possibleMoves.length > 0){
    //draw possibleAttacks
    chessBoard.showMoves(possibleMoves,0);
  }
  if(possibleAttacks.length > 0){
    //draw possibleAttacks
    chessBoard.showMoves(possibleAttacks,1);
  }

  //check to see if they want to move
  if(mouseIsPressed && mouseY > 0 && mouseY < masterSize ){
    clickedColumnIndex = Math.floor(mouseX / chessBoard.gridSize);
    clickedRowIndex = Math.floor(mouseY / chessBoard.gridSize);

    for(var i=0;i<possibleMoves.length;i+=2){
      if(clickedColumnIndex  == possibleMoves[i+1]){
        if(clickedRowIndex  == possibleMoves[i]){
          //more piece
          chessBoard.movePiece(rowIndex,columnIndex,clickedRowIndex,clickedColumnIndex);
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
}
