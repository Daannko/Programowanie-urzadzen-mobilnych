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
        default:
            bullets.push(new Bullet(player.x + 25,player.y))
            targers.push(new Target(player.x + 25, 30 ,20))
    }
}

function update(){

    bullets.forEach(obj => {
        obj.y = obj.y - dy;
        targers.forEach(target => {
            var a = obj.x - target.x;
            var b = obj.y - target.y;
            var c = Math.sqrt( a*a + b*b );

            if(c < 10 + target.size)
                target.active = false;
        })
    })


    c.clearRect(0, 0, cvs.width, cvs.height);
    player.draw();
    bullets.forEach(obj => {
        obj.draw();
    })
    targers.forEach(obj => {
        if(obj.active)
            obj.draw();
    })
}

window.addEventListener('keydown',this.check,false);
setInterval(update,10)