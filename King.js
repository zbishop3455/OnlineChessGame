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


}
