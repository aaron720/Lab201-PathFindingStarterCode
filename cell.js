
'use strict'

class Cell {
    constructor(game, location, occupied) {
      this.game = game;
      this.loc = location;
      this.occupied = occupied;
      this.clrFree = 'rgb(200,200,200)';
      this.clrOcc = 'rgb(10,10,200)';
      this.clrEnd = 'red';
      this.number = 0;
      this.endPoint = false;
    }

    render(){
     //  draw a rectangle at location
     if(this.endPoint === true) {
       this.game.context.fillStyle = this.clrEnd;
       this.number = 0;
     } else if(!this.occupied){
       this.game.context.fillStyle = this.clrFree;
     }
      else {
       this.game.context.fillStyle = this.clrOcc;
     }
     this.game.context.strokeStyle = '#001122';
     this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
     this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
     if(!this.occupied){
       this.game.context.fillStyle = 'black';
       this.game.context.fillText(this.number, this.loc.x + 10, this.loc.y + 10);
     }

    }


}
