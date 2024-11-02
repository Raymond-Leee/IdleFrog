class Fly {
    constructor(points) {
        this.points = points;
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.x = Math.floor(Math.random() * this.height);
        this.y = Math.floor(Math.random() * this.width);
        this.pos = { x: this.x, y: this.y };
    }

    getCoord() {
        return this.pos;
    }

    killFly() {
        const button = document.getElementById('fly');
        button.parentNode.removeChild(button);
    }
}
const fly = new Fly(1); 
fly.checkVisible();
