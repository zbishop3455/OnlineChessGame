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

}
