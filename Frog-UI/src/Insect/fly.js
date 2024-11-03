//import { upgradeSpawnSpeed } from "../Upgrade/upgrade.js";

window.flyPoints = 1 // fly mult
window.swatValue = 0 // swatting
window.maxTime = 2000 // disappear time
window.points=0 // total pts
window.autoSwatLevel = 0 // initial automatic fly swatter level
window.swatRateLevel = 0 // initial fly swatter rate level
window.spawnRateLevel = 0 // initial fly spawn rate level
window.pointMultiplierLevel = 0 // initial point multiplier level
window.autoSwatCost = 50 // initial automatic fly swatter cost
window.swatRateCost = 100 // initial fly swatter rate cost
window.spawnRateCost = 50 // initial fly spawn rate cost
window.pointMultiplierCost = 100 // initial point multiplier cost
window.spawnSpeed = 20000

class Fly {
    constructor() {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.x = Math.floor(Math.random() * this.height * 0.98);
        this.y = Math.floor(Math.random() * this.width * 0.8) + 0.12 * this.width;
        this.id = `fly-${Date.now()}` // make unique IDs for each btn
    }
    killFly() {
        // const pointField = document.getElementById("pts")
        // pointField.innerHTML = `${window.points}`
        const button = document.getElementById(this.id);
        button.parentNode.removeChild(button);
        window.points += window.flyPoints // inc the total points
    }
    deleteFly(){
        const button = document.getElementById(this.id)
        button.parentNode.removeChild(button)
        window.points += window.swatValue * window.flyPoints
    }
    createButton() {
        const button = document.createElement("button"); // create btn
        button.innerHTML = "Fly";
        button.id = this.id
        button.onclick = () => {
            this.killFly();
            console.log(`${window.points + window.flyPoints}`)
        }
        
        button.style.position = "absolute"; // btn can be placed anywhere
        button.className = "flies"
        //const image = document.createElement("img")
        //image.src = "../../../Assets/fly.png"
        //image.style.width = "20px"; // Set image width
        //image.style.height = "20px"; 
        button.style.top = `${this.x*0.9}px`; // Set the random x-coord
        button.style.left = `${this.y*0.9}px`; // Set the random y-coord
        //button.appendChild(image)
        const rotation = Math.floor(Math.random() * 360); // Random rotation from 0 to 359 degrees
        button.style.transform = `rotate(${rotation}deg)`;
        setTimeout(() => {
            if (document.body.contains(button)) {
                button.parentNode.removeChild(button);
                window.points += window.swatValue * window.flyPoints
                //console.log(`${this.id}`)
            }
        }, window.maxTime); // remove the fly after set time
        document.body.appendChild(button);



        return button;
    }
    // increaseSpawnSpeed(){
    //     this.spawnSpeed = 1
    // }
}
// watch the point var
// function createWatchedObject(obj, callback) {
//     return new Proxy(obj, {
//         set(target, property, value) {
//             target[property] = value;
//             callback(target);
//             return true;
//         }
//     });
// }

// export { createWatchedObject };

export function spawnFly(){
    const fly = new Fly()
    fly.createButton()
}


window.spawnFlyInterval = setInterval(spawnFly, window.spawnSpeed);

