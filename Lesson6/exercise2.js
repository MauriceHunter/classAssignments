var time = 0;
var gravity = 0;

class Fall

class Particle extends Fall {
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.velocity = {x: 0, y: 0};
    }

}
const particles = [];
for (i = 0; i < 100; i++){
    particles.push(new Particle(i, (Math.random()*500)))
}