
export function upgradeFlyMultiplier(){

}
export function upgradeTongueMultiplier(){

}
export function upgradeTongueWidth(){

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