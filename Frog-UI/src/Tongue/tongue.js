class Tongue {
    constructor(pointMultiplier) {
        this.pointMultiplier = pointMultiplier;
        this.height = 0;
        this.width = window.innerWidth / 2;
        this.x = Math.floor(Math.random() * this.height);
        this.y = Math.floor(Math.random() * this.width);
    }

    function newTongue() {
        tongue = new Tongue(1);
    }

    function changeMultiplier() {
        this.pointMultiplier *= 2;
        return pointMultiplier;
    }
}