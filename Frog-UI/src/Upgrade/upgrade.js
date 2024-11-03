import { spawnFly } from "../Insect/fly.js"
import { save, load } from "../login/login.js";

window.autoSwatLevel = 0 // initial automatic fly swatter level
window.swatRateLevel = 0 // initial fly swatter rate level
window.spawnRateLevel = 0 // initial fly spawn rate level
window.pointMultiplierLevel = 0 // initial point multiplier level
window.autoSwatCost = 50 // initial automatic fly swatter cost
window.swatRateCost = 100 // initial fly swatter rate cost
window.spawnRateCost = 50 // initial fly spawn rate cost
window.pointMultiplierCost = 100 // initial point multiplier cost

export function upgradeFlyMultiplier(){
    window.flyPoints *= 2
    upgradeFlyMultiplierButton.innerHTML = `(${window.pointMultiplierLevel + 1}) Upgrade Fly Point Multiplier: ${window.pointMultiplierCost + (10 * Math.pow(1.1, x))} Points`
}
export function upgradeSwatSpeed(){
    window.maxTime *= 0.9
    upgradeSwatSpeedButton.innerHTML = `(${window.swatRateLevel + 1}) Upgrade Fly Point Multiplier: ${window.swatRateCost + (10 * Math.pow(1.1, x))} Points`
}
export function upgradeAutoSwatter(){
    if(window.swatValue + 0.1 <= 1.5)
        window.swatValue += 0.1
        upgradeAutoSwatterButton.innerHTML = `(${window.autoSwatLevel + 1}) Upgrade Fly Point Multiplier: ${window.autoSwatCost + (10 * Math.pow(1.1, x))} Points`
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
    upgradeSpawnButton.innerHTML = `(${window.spawnRateLevel + 1}) Upgrade Fly Point Multiplier: ${window.spawnRateCost + (10 * Math.pow(1.1, x))} Points`
    return current;
}

let flyMult = 0.9
let minSpawn = 1

function initUpgrades(){
    const upgradeFlyMultiplierButton = document.getElementById("mult")
    //upgradeFlyMultiplierButton.innerHTML = "Upgrade Fly Multiplier"
    upgradeFlyMultiplierButton.onclick = () =>{
        upgradeFlyMultiplier();
        window.pointMultiplierLevel += 1
        upgradeFlyMultiplierButton.innerHTML = `(${window.pointMultiplierLevel}) 
        Upgrade Fly Point Multiplier: ${window.pointMultiplierCost + (10 * Math.pow(1.1, window.pointMultiplierLevel))} Points`
        console.log(`${flyPoints}`)
    }

    const upgradeSwatSpeedButton = document.getElementById("swatter")
    //upgradeSwatSpeedButton.innerHTML = "Upgrade Auto Swatter Speed"
    upgradeSwatSpeedButton.onclick = () =>{
        upgradeSwatSpeed()
        window.swatRateLevel += 1
        upgradeSwatSpeedButton.innerHTML = `(${window.swatRateLevel}) 
        Upgrade Swat Speed: ${window.swatRateCost + (10 * Math.pow(1.1, swatRateLevel))} Points`
        console.log(`${window.maxTime}`)
    }

    const upgradeAutoSwatterButton = document.getElementById("auto")
    //upgradeAutoSwatterButton.innerHTML = "Upgrade Swat Speed"
    upgradeAutoSwatterButton.onclick = () =>{
        upgradeAutoSwatter()
        window.autoSwatLevel += 1
        upgradeAutoSwatterButton.innerHTML = `(${window.autoSwatLevel}) 
        Upgrade Spawn Rate: ${window.autoSwatCost + (10 * Math.pow(1.1, window.autoSwatLevel))} Points`
        console.log(`${window.swatValue}`)
    }

    const upgradeSpawnButton = document.getElementById("spawn");
    //upgradeSpawnButton.innerHTML = "Upgrade Spawn Time";
    upgradeSpawnButton.onclick = () => {
        window.spawnSpeed = upgradeSpawnSpeed(window.spawnSpeed, flyMult, minSpawn);
        window.spawnRateLevel += 1
        upgradeSpawnButton.innerHTML = `(${window.spawnRateLevel}) 
        Upgrade Spawn Rate: ${window.spawnRateCost + (10 * Math.pow(1.1, window.spawnRateLevel))} Points`
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


document.addEventListener("DOMContentLoaded", () => {
    load(); // Load the saved values when the DOM is ready
    // Initialize other parts of your application here
    // Save data before the page is unloaded
    window.addEventListener("beforeunload", () => {
        save();
    });
});


document.addEventListener("DOMContentLoaded", initUpgrades);
document.addEventListener("DOMContentLoaded", initPts);
setInterval(initPts, 1)
setInterval(initUpgrades, 1) // cheaty method of solving our problem
