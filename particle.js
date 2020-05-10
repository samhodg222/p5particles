class Particle {
    constructor () {
        this.x = random(1,width);
        this.y = random(1,height);
        this.radius = 10;
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-2,2);
    }


    createParticle(){
        noStroke();
        fill('#e74c3c');
        circle(this.x,this.y,this.radius);
    }
    moveParticle(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x == width || this.x == 0) {
            this.xSpeed*=-1;
        } else if (this.y == height || this.h == 0) {
            this.ySpeed*=-1;
        }
    }
  
}
