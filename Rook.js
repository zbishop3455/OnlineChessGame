Rook = function(team){

  this.team = team;
  this.type = 4;

  if(team == 0){
    //white team
    this.picture = loadImage("images/rook_white.png");
  }
  else{
    //black team
    this.picture = loadImage("images/rook_black.png");
  }

  this.getTeam = function(){
    return this.team;
  }

  this.showMoves = function(rowIndex, columnIndex){
    var possibleMoves = [];
    var possibleAttacks = [];
    var clickedColumnIndex;
    var clickedRowIndex;

    //check "up" Phile
    for(var i = rowIndex - 1;i>-1;i--){
      if(chessBoard.chessData.get(i,columnIndex) == null || undefined){
        possibleMoves.push(i,columnIndex);
      }else if (chessBoard.chessData.get(i,columnIndex).getTeam() != BlackOrWhiteGame) {
        possibleAttacks.push(i,columnIndex);
        break;
      }else {
        break;
      }
    }

    //check "down" Phile
    for(var i = rowIndex + 1;i<8;i++){
      if(chessBoard.chessData.get(i,columnIndex) == null || undefined){
        possibleMoves.push(i,columnIndex);
      }else if (chessBoard.chessData.get(i,columnIndex).getTeam() != BlackOrWhiteGame) {
        possibleAttacks.push(i,columnIndex);
        break;
      }else {
        break;
      }
    }

    //check left
    for(var i = columnIndex - 1;i>-1;i--){
      if(chessBoard.chessData.get(rowIndex,i) == null || undefined){
        possibleMoves.push(rowIndex,i);
      }else if (chessBoard.chessData.get(rowIndex,i).getTeam() != BlackOrWhiteGame) {
        possibleAttacks.push(rowIndex,i);
        break;
      }else {
        break;
      }
    }

    //check right
    for(var i = columnIndex + 1;i<8;i++){
      if(chessBoard.chessData.get(rowIndex,i) == null || undefined){
        possibleMoves.push(rowIndex,i);
      }else if (chessBoard.chessData.get(rowIndex,i).getTeam() != BlackOrWhiteGame) {
        possibleAttacks.push(rowIndex,i);
        break;
      }else {
        break;
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
