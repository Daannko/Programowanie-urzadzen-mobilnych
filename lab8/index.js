const cvs = document.getElementById("myCanvas");
const c = cvs.getContext('2d');

cvs.width = 800 
cvs.height = 600
var dy = 5;
var speed_limit = 15;
var jump = 0;

var turn = 0;

function check(e) {
    var code = e.keyCode;
    switch (code) {
        case 32:
            if(jump == 0)
            jump = 15;
            break;
        case 82:
            player.active = true;
            blocks = [];
            break;
        default:
            console.log(code);
    }
}


class Stone{
    constructor(x,y,radius,color){
        this.value = 0;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color
        this.active = true;
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
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
        this.active = true;
        this.height = 30;
        this.width = 30;

    }

    draw = () => {
        c.beginPath();
        c.rect(this.x, this.y, this.width,this.height);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
      };
}

var lines = [];
var stones = [];
var stonesInt = Array(9).fill().map(() => Array(9));


function spawnBlock()
{
    blocks.push(new Block(800  ,270,"yellow"));
    //Math.floor(Math.random() *  (270 - 125) + 125)
}



function spawnLines(){
    for(let i = 0 ; i < 9; i++){
        lines.push(new Line(100, i * 70 + 20, 5, 560,"black"));
        lines.push(new Line(i * 70 + 100, 20 , 565, 5,"black"));
    }
}

function detectStone(){
  
}

function drawBackground(){
    c.beginPath();
    c.rect(0, 0, cvs.width,cvs.height);
    c.fillStyle = "brown";
    c.fill();
    c.stroke();
}

function update(){
    c.clearRect(0, 0, cvs.width, cvs.height);

    drawBackground();
    lines.forEach(e => {
       e.draw();
    })
    stones.forEach(e => {
        if(e.active)
        e.draw();
    })
 

}
function spawnStone(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log(stonesInt);

    for(let j = 0; j < 9 ; j ++){
        for(let i = 0 ; i < 9; i++){

            var gridX = 100 + j * 70;
            var gridY = i * 70 + 20;
            
            var a = gridX - x;
            var b = gridY - y;
        
            var c = Math.sqrt( a*a + b*b );
            if(c < 30){
                stones.push(new Stone(gridX,gridY,30, turn % 2 == 0 ? "black" : "white"))
                turn++;
            }
        }
    }
    }

let canvasElem = document.querySelector("canvas");
canvasElem.addEventListener("mousedown", function(e)
{
    spawnStone(canvasElem, e);
});



spawnLines();
window.addEventListener('keydown',this.check,false);
setInterval(update,10)
//setInterval(spawnBlock,1500)
spawnLines();
   