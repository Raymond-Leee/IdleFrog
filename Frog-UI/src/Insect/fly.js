class Fly {
    constructor(points) {
        this.points = points;
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.x = Math.floor(Math.random() * this.height);
        this.y = Math.floor(Math.random() * this.width);
        this.id = `fly-${Date.now()}`
        //this.id = "fly"
    }
    killFly() {
        const button = document.getElementById(this.id);
        button.parentNode.removeChild(button);
    }
    createButton() {
        const button = document.createElement("button");
        button.innerHTML = "Fly";
        button.id = this.id
        button.onclick = () => this.killFly();
        button.style.position = "absolute";
        button.style.top = `${this.x*0.9}px`; // Set the random x-coord
        button.style.left = `${this.y*0.9}px`; // Set the random y-coord
        document.body.appendChild(button);
        return button;
    }
}
function spawnFly(){
    fly = new Fly(1)
    fly.createButton()
}
setInterval(spawnFly, 1000); 
