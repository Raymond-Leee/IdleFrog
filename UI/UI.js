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
var tongue;

var width, height;
var pointer = game.input.activePointer;

function preload(){
    this.load.image('background', '../Assets/blue.jpg');
    this.load.image('lilypad', '../Assets/lilypad.png');
    this.load.image('frog', '../Assets/frog.png');
    this.load.image('tongue', '../Assets/tongue.png');
    
}

function create(){
    let { width, height } = this.sys.game.canvas;

    background = this.add.tileSprite(width/2, height/2, width*5, height*5, 'background');
    
    lilypad = this.add.image(width/2, height + 50, 'lilypad');
    lilypad.setScale(5, 5);

    tongue = this.add.image(width/2, height - 130, 'tongue');
    tongue.setScale(1.5, 3);
    tongue.setOrigin(0.5, 1);

    frog = this.add.image(width/2, height - 150, 'frog');
    frog.setScale(3, 3);
}

function update(){
    background.tilePositionY -= 0.7;
    lilypad.angle += 0.07;
    lilypad.tilePositionY = height + 50;
    frog.tilePositionY = height - 150;

    if(pointer.leftButtonDown()){
        let { width, height } = this.sys.game.canvas;
        tongue.setAngle(Phaser.Math.RAD_TO_DEG * (Phaser.Math.Angle.Between(width/2, height-130, pointer.x, pointer.y)) + 90);
        tongue.setScale(1.5, Phaser.Math.Distance.Between(width/2, height-130, pointer.x, pointer.y)/150+0.1);

    }
}
