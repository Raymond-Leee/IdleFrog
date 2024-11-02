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
    createButton() {
        const button = document.createElement("button");
        button.innerHTML = "Fly";
        button.id = `fly-${Date.now()}`;
        button.onclick = () => this.killFly();
        button.style.left = `${this.x}px`; // Set the random x-coord
        button.style.top = `${this.y}px`; // Set the random y-coord
        document.body.appendChild(button);
        return button;
    }
}
//const fly = new Fly(1)
function spawnFly(){
    fly = new Fly(1)
}
//fly.checkVisible();
setInterval(spawnFly, 1000); 
