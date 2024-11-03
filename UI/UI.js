var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    //scaling
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);
var background;
var lilypad;
var frog;

var width, height;

function preload(){
    this.load.image('background', '../Assets/blue.jpg');
    this.load.image('lilypad', '../Assets/lilypad.png');
    this.load.image('frog', '../Assets/frog.png');
    this.load.image('tongue', '../Assets/tongue.png');
    
    //COMMENTED OUT TO KEEP MEM DOWN LOL
    //this.load.script('spawnFly', "../Frog-UI/src/Insect/fly.js");
    
}

function create(){
    let { width, height } = this.sys.game.canvas;

    background = this.add.tileSprite(width/2, height/2, width*5, height*5, 'background');
    
    lilypad = this.add.image(width/2, height + 50, 'lilypad');
    lilypad.setScale(5, 5);

    frog = this.add.image(width/2, height - 150, 'frog');
    frog.setScale(3, 3);

    //let fly = this.add.script('spawnFly');

}

function update(){
    background.tilePositionY -= 0.7;
    lilypad.angle += 0.07;
    lilypad.tilePositionY = height + 50;
    frog.tilePositionY = height - 150;
}
