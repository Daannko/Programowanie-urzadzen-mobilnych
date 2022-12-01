const cvs = document.getElementById("myCanvas");
const c = cvs.getContext('2d');

cvs.width = 800 
cvs.height = 600
var dy = 5;
var speed_limit = 15;
var jump = 0;

function check(e) {

    console.log(e.keyCode)
    var code = e.keyCode;
    switch (code) {
        case 32:
            if(jump == 0)
            jump = 15;
        
        default:
            console.log(code);
    }
}


class Car{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
        this.active = true;
        this.jump = 0;
    }

    draw = () => {
        c.beginPath();
        c.rect(this.x, this.y, this.width,this.height);
        c.fillStyle = this.color;
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

var lines = [];
var player =new Car(300,280,50,20,"red");
var blocks = [];

function spawnBlock()
{
    blocks.push(new Bullet(Math.floor(Math.random() *  (280 - 125) + 125) ,-200,50,"black"));
    console.log(blocks);
}

function spawnLines(){
    for(let i = 0 ; i < 20; i++){
        lines.push(new Line(i * 50,300, 20, 50,i % 2 == 0 ? "black" : "white"));
    }
}

function drawBackground(){
    c.beginPath();
    c.rect(0, 0, cvs.width,cvs.height);
    c.fillStyle = "green";
    c.fill();
    c.stroke();
}

function update(){
    c.clearRect(0, 0, cvs.width, cvs.height);

    drawBackground();
    lines.forEach(e => {
        e.draw();
        e.x -= 10;
        if(e.x == -100){
            e.x = 800;
        }
    })
    player.draw();

    if(jump > 0){
        player.y -= 10;
        jump --;
        if(jump == 0) jump = -15;
        
    }else if (jump < 0){
        player.y += 10;
        jump ++;
    }

    blocks.f

    console.log(jump);

}
spawnLines();
window.addEventListener('keydown',this.check,false);
setInterval(update,10)
setInterval(spawnBlock,100 * (15 - dy))
spawnLines();
   