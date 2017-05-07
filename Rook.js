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



}
