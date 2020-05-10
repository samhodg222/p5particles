/// <reference path="../p5jstemp/TSDef/p5.global-mode.d.ts"/>


let particles = [];
function setup() {
    createCanvas(1200,600);
    frameRate(30);
    for(i = 0; i < 50; i ++){
        particles.push(new Particle());
    }
}
function draw() {
    background(100);
    console.log('drawCalled');
    for(i = 0; i < particles.length; i++){
        particles[i].createParticle();
        particles[i].moveParticle();
    }
}