class Particle {
    constructor(){
        this.x = random(1,width);
        this.y = random(1,height);
        this.radius = random(10,15);
        this.xSpeed = random(-3,2.5);
        this.ySpeed = random(-2,2.5);
        this.alpha = '#e74c3c';
    }
    
    createParticle(){
        fill(this.alpha);
        circle(this.x,this.y,this.radius);
    }
    moveParticle(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x > width || this.x < 0) {
            this.xSpeed*=-1;
        } else if (this.y > height || this.y < 0) {
            this.ySpeed*=-1;
        }
    }

    linkWithLines(particles) { 
        particles.forEach(element => {
            let dis = dist(this.x,this.y,element.x,element.y);
            if(dis<90) {
                stroke(0);
                line(this.x,this.y,element.x,element.y);
              } 
            if(dis < 10){
                this.xSpeed *= -1;
                element.xSpeed *= -1;    
            }   
        });
    }

}
