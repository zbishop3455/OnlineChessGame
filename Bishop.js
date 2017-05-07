Bishop = function(team){
  this.team = team;
  this.type = 2;
  if(team == 0){
    //white team
    this.picture = loadImage("images/bishop_white.png");
  }
  else{
    //black team
    this.picture = loadImage("images/bishop_black.png");
  }

  this.getTeam = function(){
    return this.team;
  }


}
