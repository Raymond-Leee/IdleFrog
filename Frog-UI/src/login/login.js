function save() {
    console.log("Saving data...");
    localStorage.setItem("points", window.points.toString());
    localStorage.setItem("maxTime", window.maxTime.toString());
    localStorage.setItem("swatValue", window.swatValue.toString());
    localStorage.setItem("flyPoints", window.flyPoints.toString());
    localStorage.setItem("spawnSpeed", window.spawnSpeed.toString());
    localStorage.setItem("autoSwatLevel",window.autoSwatLevel.toString());
    localStorage.setItem("swatRateLevel",window.swatRateLevel.toString());
    localStorage.setItem("spawnRateLevel",window.spawnRateLevel.toString());
    localStorage.setItem("pointMultiplierLevel",window.pointMultiplierLevel.toString());
    localStorage.setItem("autoSwatCost",window.autoSwatCost.toString());
    localStorage.setItem("swatRateCost",window.swatRateCost.toString());
    localStorage.setItem("spawnRateCost",window.spawnRateCost.toString());
    localStorage.setItem("pointMultiplierCost",window.pointMultiplierCost.toString());
    console.log("Data saved!");
}

function load() {
    console.log("Loading data...");
    window.points = parseInt(localStorage.getItem("points")) || 0;
    window.maxTime = parseInt(localStorage.getItem("maxTime")) || 0;
    window.swatValue = parseFloat(localStorage.getItem("swatValue")) || 0;
    window.flyPoints = parseInt(localStorage.getItem("flyPoints")) || 0;
    window.spawnSpeed = parseInt(localStorage.getItem("spawnSpeed")) || 1000;
    window.autoSwatLevel = parseInt(localStorage.getItem("autoSwatLevel")) || 0;
    window.swatRateLevel = parseInt(localStorage.getItem("swatRateLevel")) || 0;
    window.spawnRateLevel = parseInt(localStorage.getItem("spawnRateLevel")) || 0;
    window.pointMultiplierLevel = parseInt(localStorage.getItem("pointMultiplierLevel")) || 0;
    window.autoSwatCost = parseFloat(localStorage.getItem("autoSwatCost")) || 0;
    window.swatRateCost = parseFloat(localStorage.getItem("swatRateCost")) || 0;
    window.spawnRateCost = parseFloat(localStorage.getItem("spawnRateCost")) || 0;
    window.pointMultiplierCost = parseFloat(localStorage.getItem("pointMultiplierCost")) || 0;
    console.log("Data loaded!");
}

export { save, load };
