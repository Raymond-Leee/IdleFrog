import { spawnFly } from "../Insect/fly.js"

window.points = 0
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
        console.log(`${flyMult}`)
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
document.addEventListener("DOMContentLoaded", initUpgrades);
