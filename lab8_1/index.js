const cvs = document.getElementById("myCanvas");
const c = cvs.getContext('2d');

cvs.width = 800 
cvs.height = 600
var dy = 5;
var speed_limit = 15;
var jump = 0;

var turn = 1;

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

      };
}

function drawStone(x,y,r,color){
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.fillStyle = color;
    c.fill();
    c.stroke();
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
var stones = Array(9).fill().map(() => Array(9).fill(0));





function spawnLines(){
    for(let i = 0 ; i < 9; i++){
        lines.push(new Line(100, i * 70 + 20, 5, 560,"black"));
        lines.push(new Line(i * 70 + 100, 20 , 565, 5,"black"));
    }
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

    for(let j = 0; j < 9 ; j ++){
        for(let i = 0 ; i < 9; i++){

            var gridX = 100 + j * 70;
            var gridY = i * 70 + 20;
            
            if(stones[i][j] != 0)
            drawStone(gridX,gridY,30,stones[i][j] == -1 ? "black" : "white")

        }
    }

}
function spawnStone(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    for(let j = 0; j < 9 ; j ++){
        for(let i = 0 ; i < 9; i++){

            var gridX = 100 + j * 70;
            var gridY = i * 70 + 20;
            
            var a = gridX - x;
            var b = gridY - y;
        
            var c = Math.sqrt( a*a + b*b );
            if(c < 30 && stones[i][j] == 0){
                stones[i][j] =  turn % 2 == 0 ? 1 : -1;
                turn++;
                if(i-1 > 0)
                capture(i-1 ,j)
                if(i + 1 < 9)
                capture(i+1 ,j)
                if(j - 1 > 0)
                capture(i ,j-1)
                if(j + 1 < 9)
                capture(i ,j+1)
            }
        }
     }

    }



function capture(x,y){

    class Cord{
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
    }

    if(stones[x][y] == 0) return;

    var value  = stones[x][y];
    var us = [];
    us.push( new Cord(x,y));
    let uslength = 0;
    while(us.length != uslength){
        uslength = us.length
        us.forEach( cord => {
            cx = cord.x;
            cy = cord.y;
    
            let temp = new Cord(cx,cy-1)
            if(cy - 1 > 0)
            if(stones[temp.x][temp.y] == value){
              
                if(!us.some(e => e.x === temp.x && e.y === temp.y)){
                    us.push(temp)
                }
         
            }
            temp = new Cord(cx,cy+1)
            if(cy + 1 < 9)
            if(stones[temp.x][temp.y] == value){
              
                if(!us.some(e => e.x === temp.x && e.y === temp.y)){
                    us.push(temp)
                }
         
            }
            temp = new Cord(cx+1,cy)
            if(cx+1 < 9)
            if(stones[temp.x][temp.y] == value){
              
                if(!us.some(e => e.x === temp.x && e.y === temp.y)){
                    us.push(temp)
                }
         
            }
            temp = new Cord(cx-1,cy)
            if(cx-1 > 0)
            if(stones[temp.x][temp.y] == value){
              
                if(!us.some(e => e.x === temp.x && e.y === temp.y)){
                    us.push(temp)
                }
         
            }
        })
       
    }

    let del = true;
    us.forEach( cord => {
        cx = cord.x;
        cy = cord.y;

            let temp = new Cord(cx,cy-1)
            if(cy -1 < 0){}
            else if(stones[temp.x][temp.y] == 0){
                del = false;
            }
            temp = new Cord(cx,cy+1)
            if(cy + 1 > 8){}
            else if(stones[temp.x][temp.y] == 0){
                del = false;
            }
            temp = new Cord(cx+1,cy)
            if(cx + 1 > 8){}
            else if(stones[temp.x][temp.y] == 0){
                del = false;
            }
            temp = new Cord(cx-1,cy)
            if(cx - 1 < 0){}
            else if(stones[temp.x][temp.y] == 0){
                del = false;
            }
        }
    )

    if(del){
        us.forEach( cord => {
            stones[cord.x][cord.y] = 0;
        })
    }
    console.log(us);
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
   