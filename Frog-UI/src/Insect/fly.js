import { upgradeSpawnSpeed } from "../Upgrade/upgrade.js";

window.flyPoints = 1
window.swatValue = 0
var maxTime = 2000

class Fly {
    constructor() {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.x = Math.floor(Math.random() * this.height);
        this.y = Math.floor(Math.random() * this.width);
        this.id = `fly-${Date.now()}` // make unique IDs for each btn
    }
    killFly() {
        const button = document.getElementById(this.id);
        button.parentNode.removeChild(button);
        window.points += flyPoints // inc the total points
    }
    deleteFly(){
        const button = document.getElementById(this.id)
        button.parentNode.removeChild(button)
    }
    createButton() {
        const button = document.createElement("button"); // create btn
        //button.innerHTML = "Fly";
        button.id = this.id
        button.onclick = () => {
            this.killFly();
            console.log(`${window.points * window.swatValue}`)
        }
        
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
        setTimeout(() => {
            if (document.body.contains(button)) {
                button.parentNode.removeChild(button);
                console.log(`${this.id}`)
            }
        }, maxTime); // remove the fly after set time
        document.body.appendChild(button);



        return button;
    }
    // increaseSpawnSpeed(){
    //     this.spawnSpeed = 1
    // }
}
export function spawnFly(){
    const fly = new Fly()
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
    console.log(`New Interval: ${spawnSpeed}ms`);
};
document.body.appendChild(upgradeSpawnButton);
