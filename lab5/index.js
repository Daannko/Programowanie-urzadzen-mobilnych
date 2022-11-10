const cvs = document.getElementById("myCanvas");
const c = cvs.getContext('2d');

cvs.width = 800 
cvs.height = 600
var dy = 5;

function check(e) {

    console.log(e.keyCode)
    var code = e.keyCode;
    switch (code) {
        case 37: 
            if(player.x - 1 >= 100)
                player.x = player.x - 10;
            break;
        case 39: 
            if(player.x + 1 <= cvs.width - 150)
                player.x = player.x + 10;
            break;
        case 32:
            bullets.push(new Bullet(player.x + 25,player.y))
    }
}

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
        c.fillStyle = "black";
        c.fill();
        c.stroke();
      };
}

class Line{
    constructor(x,y,height,width,color){
        this.x = x;
        this.y= y;
        this.color = color;
        this.height = height;
        this.width = width;
    }

    draw = () => {
        c.beginPath();
        c.rect(this.x, this.y, this.width,this.height);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
      };
}

class Block{
    constructor(x,y,color){
        this.x = x;
        this.y= y;
        this.color = color;

    }

    draw = () => {
        c.beginPath();
        c.rect(this.x, this.y, 30,30);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
      };
}

var player = new Player(400,500);
var lines = [];
var blocks = [];
var colors = ["red","white"];

function spawnBlock()
{
    blocks.push(new Block(Math.floor(Math.random() * 800),Math.floor(Math.random() * 200),"green"));
}

function spawnLines(){
    for(let i = 0 ; i < 33; i++){
        lines.push(new Line(0,i * 19, 20, 100,colors[(i % 2)]));
        lines.push(new Line(cvs.width - 100,i * 19, 20, 100,colors[(i % 2)]));
    }
    for(let i = 0 ; i < 4; i++){
        lines.push(new Line((cvs.width - 30) / 2,i * 200,100,30 ,"white"));
    }
}

function drawRoad(){
    c.beginPath();
    c.rect(100, 0, cvs.width - 200 ,cvs.height);
    c.fillStyle = "grey";
    c.fill();
    c.stroke();
}



function update(){
    c.clearRect(0, 0, cvs.width, cvs.height);
    drawRoad();
    lines.forEach(e => {
        e.draw();
        e.y = e.y + 5;
        if(e.y > 600 + e.height)
        {
            e.y = -e.height;
        }
    })
    blocks.forEach(e => {
        e.draw();
    })
    player.draw();
    console.log(lines);
}

window.addEventListener('keydown',this.check,false);
setInterval(update,10)
spawnLines(spawnBlock,200);