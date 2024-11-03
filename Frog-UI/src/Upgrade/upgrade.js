import { spawnFly } from "../Insect/fly.js"
window.points = 0
export function upgradeFlyMultiplier(){
    window.flyPoints *= 2
}
export function upgradeTongueMultiplier(value){
    Tongue.pointMultiplier *= value;
}
export function upgradeTongueWidth(){
    // Make Tongue sprite bigger
}
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
