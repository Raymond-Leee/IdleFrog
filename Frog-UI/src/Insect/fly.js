import { upgradeSpawnSpeed } from "../Upgrade/upgrade";

class Fly {
    constructor(points) {
        this.points = points;
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.x = Math.floor(Math.random() * this.height);
        this.y = Math.floor(Math.random() * this.width);
        this.id = `fly-${Date.now()}` // make unique IDs for each btn
    }
    killFly() {
        const button = document.getElementById(this.id);
        button.parentNode.removeChild(button);
    }
    createButton() {
        const button = document.createElement("button"); // create btn
        //button.innerHTML = "Fly";
        button.id = this.id
        button.onclick = () => this.killFly();
        button.onclick = () => this.increaseSpawnSpeed();
        button.style.position = "absolute"; // btn can be placed anywhere
        button.className = "flies"
        const image = document.createElement("img")
        image.src = "../../../Assets/fly.png"
        image.style.width = "20px"; // Set image width
        image.style.height = "20px"; 
        button.style.top = `${this.x*0.9}px`; // Set the random x-coord
        button.style.left = `${this.y*0.9}px`; // Set the random y-coord
        button.appendChild(image)
        const rotation = Math.floor(Math.random() * 360); // Random rotation from 0 to 359 degrees
        button.style.transform = `rotate(${rotation}deg)`;
        document.body.appendChild(button);
        return button;
    }
    increaseSpawnSpeed(){
        this.spawnSpeed = 1
    }
}
function spawnFly(){
    const fly = new Fly(1)
    fly.createButton()
}
let spawnSpeed = 500
let mult = 0.9
let min = 100

window.spawnFlyInterval = setInterval(spawnFly, spawnSpeed); 

const upgradeSpawnButton = document.createElement("button");
upgradeSpawnButton.innerHTML = "Upgrade Spawn Time";
upgradeSpawnButton.onclick = () => {
    spawnSpeed = upgradeSpawnSpeed(spawnSpeed, mult, min);
    console.log(`New Interval: ${currentInterval}ms`);
};
document.body.appendChild(upgradeSpawnButton);
