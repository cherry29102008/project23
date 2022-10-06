class Archery {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.player_image=loadImage("assets/player.png");
      this.playerArcher_image=loadImage("assets/cannonBase.png")
    }
      display(){
        push()
        imageMode(CENTER);
        image(this.player_image,this.x,this.y,this.width,this.height);
        pop();
        image(this.playerArcher_image,70,20,200,200);
        noFill();
    }
      
    }

