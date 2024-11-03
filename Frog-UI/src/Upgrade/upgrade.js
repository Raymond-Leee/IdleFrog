import { spawnFly } from "../Insect/fly.js"

export function upgradeFlyMultiplier(){
    window.flyPoints *= 2
}
export function upgradeTongueMultiplier(){

}
export function upgradeAutoSwatter(){
    if(window.swatValue + 0.1 <= 1.5)
        window.swatValue += 0.1
    else{
        window.swatValue = 1.5
    }
}
// export function upgradeTongueWidth(){
//     // Make Tongue sprite bigger
// }
export function upgradeSpawnSpeed(current, mult, min){
    if(window.spawnFlyInterval){
        clearInterval(window.spawnFlyInterval)
    }
    current *= mult
    if(current < min){
        current = min
    }
    window.spawnFlyInterval = setInterval(spawnFly, current)
    return current;
}

let flyMult = 0.9
let minSpawn = 100

function initUpgrades(){
    const upgradeFlyMultiplierButton = document.getElementById("mult")
    upgradeFlyMultiplierButton.innerHTML = "Upgrade Fly Multiplier"
    upgradeFlyMultiplierButton.onclick = () =>{
        upgradeFlyMultiplier();
        console.log(`${flyPoints}`)
    }

    const upgradeAutoSwatterButton = document.getElementById("auto")
    upgradeAutoSwatterButton.innerHTML = "Upgrade Auto Swatter"
    upgradeAutoSwatterButton.onclick = () =>{
        upgradeAutoSwatter()
        console.log(`${window.swatValue}`)
    }

    const upgradeSpawnButton = document.getElementById("spawn");
    upgradeSpawnButton.innerHTML = "Upgrade Spawn Time";
    upgradeSpawnButton.onclick = () => {
        window.spawnSpeed = upgradeSpawnSpeed(window.spawnSpeed, flyMult, minSpawn);
        console.log(`New Interval: ${window.spawnSpeed}ms`);
    };
}
function initPts(){
    const pointField = document.getElementById("pts")
    setTimeout(() => {
        pointField.innerHTML = `Points: ${Math.trunc(window.points * 100) / 100}`
    }, 1);
}
//import { createWatchedObject } from './watch.js';

// const data = { points: 0 };
// const watchedData = createWatchedObject(data, (updatedData) => {
//     console.log(`Points updated: ${updatedData.points}`);
//     const upgradeButton = document.getElementById("pts");
//     if (upgradeButton) {
//         upgradeButton.innerHTML = `Upgrades (${updatedData.points})`;
//     }
// });

// Modify the points and watch the changes
// watchedData.points = 10;  // Points updated: 10
// watchedData.points = 20;  // Points updated: 20

document.addEventListener("DOMContentLoaded", initUpgrades);
document.addEventListener("DOMContentLoaded", initPts);
setInterval(initPts, 1)
setInterval(initUpgrades, 1) // cheaty method of solving our problem
