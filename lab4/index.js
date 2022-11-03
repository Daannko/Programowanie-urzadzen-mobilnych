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

function drawRoad(){
    c.beginPath();
    c.rect(100, 0, cvs.width - 200 ,cvs.height);
    c.fillStyle = "grey";
    c.fill();
    c.stroke();
}

var i = 0;
var colors = ["red","white"];
function drawBarier(start,end){
    c.beginPath();
    c.rect(100,start , 150 ,end);
    c.rect(cvs.width - 200,start ,cvs.width - 250 ,end);
    c.fillStyle = colors[i]
    i = i++ % 2;
    c.fill();
    c.stroke();
}

function drawBariers(){
    var heightB = cvs.hasAttribute / 20;
    for(let j =0 ; j < heightB ; j ++)
    {
        console.log(j);
        drawBarier(j * (heightB), (j * heightB) + 100);
    }
}
function update(){
    c.clearRect(0, 0, cvs.width, cvs.height);
      
    drawRoad();
    drawBariers();


    c.beginPath();
    c.fillStyle = "black";
    c.fillText('Zestrzelone punkty: ' + player.destroyedTargets, 300, 350);
}

window.addEventListener('keydown',this.check,false);
setInterval(update,10)
setInterval(spawnTarger,2000)