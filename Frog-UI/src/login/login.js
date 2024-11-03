function save() {
    console.log("Saving data...");
    localStorage.setItem("points", window.points.toString());
    localStorage.setItem("maxTime", window.maxTime.toString());
    localStorage.setItem("swatValue", window.swatValue.toString());
    localStorage.setItem("flyPoints", window.flyPoints.toString());
    localStorage.setItem("spawnSpeed", window.spawnSpeed.toString());
    console.log("Data saved!");
}

function load() {
    console.log("Loading data...");
    window.points = parseInt(localStorage.getItem("points")) || 0;
    window.maxTime = parseInt(localStorage.getItem("maxTime")) || 0;
    window.swatValue = parseFloat(localStorage.getItem("swatValue")) || 0;
    window.flyPoints = parseInt(localStorage.getItem("flyPoints")) || 0;
    window.spawnSpeed = parseInt(localStorage.getItem("spawnSpeed")) || 1000;
    console.log("Data loaded!");
}

export { save, load };
