/// <reference path="../p5jstemp/TSDef/p5.global-mode.d.ts"/>


let particles = [];
let limit;
function setup() {
    createCanvas(1200,600);
    frameRate(60);
    limit = 90;
    for(i = 0; i < limit; i ++){
        particles.push(new Particle());
    }
    console.log('No. Particles: ' + floor(limit).toString());
    let stopButton = createButton('Stop');
    stopButton.position(10, 10);
    stopButton.mousePressed(stopAnimation);
    let startButton = createButton('Play');
    startButton.position(50, 10);
    startButton.mousePressed(playAnimation);
}
function draw() {
    background(100);
    for(i = 0; i < particles.length; i++){
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].linkWithLines(particles.slice(i));
    }
}
function stopAnimation() {
    frameRate(0);
}
function playAnimation() {
    frameRate(60);
}