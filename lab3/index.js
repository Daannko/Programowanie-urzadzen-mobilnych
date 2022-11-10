const cvs = document.getElementById("myCanvas");
const c = cvs.getContext('2d');

cvs.width = 800 
cvs.height = 600
var dy = 5;

class Player{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.destroyedTargets = 0;
    }
    draw = () => {
        console.log(player.x+" "+ player.y)
        c.beginPath();
        c.rect(this.x, this.y, 50,50);
        c.fillStyle = "red";
        c.fill();
        c.stroke();
      };
}

class Bullet{

    constructor(x,y){
        this.x = x;
        this.y= y;
        this.speed = 10;
        this.active = true;
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, 10, 0, Math.PI*2);
        c.fillStyle = "black";
        c.fill();
        c.stroke();
      };
}

class Target{
    constructor(x,y,size){
        this.x = x;
        this.y= y;
        this.size = size;
        this.active = true;
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI*2);
        c.fillStyle = "green";
        c.fill();
        c.stroke();
      };
}

class Bullet{

    constructor(x,y){
        this.x = x;
        this.y= y;
        this.speed = 10;
        this.active = true;
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, 10, 0, Math.PI*2);
        c.fillStyle = "black";
        c.fill();
        c.stroke();
      };
}

var player = new Player(0, cvs.height -50 )
var bullets = [];
var targers = [];

function check(e) {

    console.log(e.keyCode)
    var code = e.keyCode;
    switch (code) {
        case 37: 
            if(player.x - 1 >= 0)
                player.x = player.x - 5;
            break;
        case 39: 
            if(player.x + 1 <= cvs.width - 50)
                player.x = player.x + 5;
            break;
        case 32:
            bullets.push(new Bullet(player.x + 25,player.y))
    }
}


function spawnTarger(){
    targers.push(new Target(Math.floor(Math.random() * 800),Math.floor(Math.random() * 200),Math.floor(Math.random() * 25) + 20));
}

function update(){

    bullets.forEach(obj => {
        if(obj.active){
            obj.y = obj.y - dy;
            targers.forEach(target => {
                if( target.active){
                    var a = obj.x - target.x;
                    var b = obj.y - target.y;
                    var c = Math.sqrt( a*a + b*b );
                    if((c < 10 + target.size)){
                        target.active = false;
                        player.destroyedTargets = player.destroyedTargets + 1;
                        console.log("PKT: " + player.destroyedTargets);
                        obj.active = false;
                    }
                }
            })
        }
    })


    c.clearRect(0, 0, cvs.width, cvs.height);
    player.draw();
    bullets.forEach(obj => {
        if(obj.active)
            obj.draw();
    })
    targers.forEach(obj => {
        if(obj.active)
            obj.draw();
    })

    c.font = '20px serif';

    c.beginPath();
    c.fillStyle = "black";
    c.fillText('Zestrzelone punkty: ' + player.destroyedTargets, 300, 350);
}

window.addEventListener('keydown',this.check,false);
setInterval(update,10)
setInterval(spawnTarger,2000)