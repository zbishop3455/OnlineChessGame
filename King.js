King = function(team){

  this.team = team;
  this.type = 0;
  if(team == 0){
    //white team
    this.picture = loadImage("images/king_white.png");
  }
  else{
    //black team
    this.picture = loadImage("images/king_black.png");
  }

  this.getTeam = function(){
    return this.team;
  }

  this.showMoves = function(rowIndex,columnIndex){
    var possibleMoves = [];
    var possibleAttacks = [];
    var clickedColumnIndex;
    var clickedRowIndex;
    var data = chessBoard.chessData;
    //check 1 space in all directions

    //up
    if(rowIndex > 0){
    if(data.get(rowIndex-1,columnIndex) == null || undefined){
      possibleMoves.push(rowIndex-1,columnIndex);
    }
    else{
        if(data.get(rowIndex-1,columnIndex).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex-1,columnIndex);
        }
      }
    }
    //down
    if(rowIndex < 7){
    if(data.get(rowIndex+1,columnIndex) == null || undefined){
      possibleMoves.push(rowIndex+1,columnIndex);
    }
    else{
        if(data.get(rowIndex+1,columnIndex).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex+1,columnIndex);
        }
      }
    }

    // up-right
    if(rowIndex > 0 && columnIndex < 7){
    if(data.get(rowIndex-1,columnIndex+1) == null || undefined){
      possibleMoves.push(rowIndex-1,columnIndex+1);
    }
    else{
        if(data.get(rowIndex-1,columnIndex+1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex-1,columnIndex+1);
        }
      }
    }

    //up left
    if(rowIndex > 0 && columnIndex > 0){
    if(data.get(rowIndex-1,columnIndex-1) == null || undefined){
      possibleMoves.push(rowIndex-1,columnIndex-1);
    }
    else{
        if(data.get(rowIndex-1,columnIndex-1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex-1,columnIndex-1);
        }
      }
    }

    // down-right
    if(rowIndex < 7 && columnIndex < 7){
    if(data.get(rowIndex+1,columnIndex+1) == null || undefined){
      possibleMoves.push(rowIndex+1,columnIndex+1);
    }
    else{
        if(data.get(rowIndex+1,columnIndex+1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex+1,columnIndex+1);
        }
      }
    }

    //down left
    if(rowIndex < 7 && columnIndex > 0){
    if(data.get(rowIndex+1,columnIndex-1) == null || undefined){
      possibleMoves.push(rowIndex+1,columnIndex-1);
    }
    else{
        if(data.get(rowIndex+1,columnIndex-1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex+1,columnIndex-1);
        }
      }
    }

    //right
    if(columnIndex < 7){
    if(data.get(rowIndex,columnIndex+1) == null || undefined){
      possibleMoves.push(rowIndex,columnIndex+1);
    }
    else{
        if(data.get(rowIndex,columnIndex+1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex,columnIndex+1);
        }
      }
    }

    //left
    if(columnIndex > 0){
    if(data.get(rowIndex,columnIndex-1) == null || undefined){
      possibleMoves.push(rowIndex,columnIndex-1);
    }
    else{
        if(data.get(rowIndex,columnIndex-1).getTeam() != BlackOrWhiteGame){
          possibleAttacks.push(rowIndex,columnIndex-1);
        }
      }
    }



    //show moves
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
