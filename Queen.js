Queen = function(team){
  this.type = 1;
  this.team = team;
  if(team == 0){
    //white team
    this.picture = loadImage("images/queen_white.png");
  }
  else{
    //black team
    this.picture = loadImage("images/queen_black.png");
  }

  this.getTeam = function(){
    return this.team;
  }


}
