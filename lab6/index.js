const cvs = document.getElementById("myCanvas");
const c = cvs.getContext('2d');

cvs.width = 800 
cvs.height = 600
var dy = 5;
var speed_limit = 15;

function check(e) {

    console.log(e.keyCode)
    var code = e.keyCode;
    switch (code) {
        case 37: 
            if(player.x - 1 >= 125)
                player.x = player.x - 10;
            break;
        case 39: 
            if(player.x + 1 <= cvs.width - 175)
                player.x = player.x + 10;
            break;
        case 38: 
            if(player.y - 1 >= 0)
                player.y = player.y - 10;
            break;
        case 40: 
            if(player.y + 1 <= cvs.height - player.height - 25)
                player.y = player.y + 10;
            break;
        case 32:
            console.log(bullets);
            bullets.push(new Bullet(player.x + 25,player.y,10,"red"))
            break;
        case 87:
            if(dy + 1 <= speed_limit)
                dy += 1;
            break;
        case 83:
            if(dy - 1 >= 1)
            dy -= 1;
            break;

            
        default:
            console.log(code);
    }
    console.log(dy);
}

class Bullet{

    constructor(x,y,size,color){
        this.x = x;
        this.y= y;
        this.speed = 10;
        this.active = true;
        this.size = size;
        this.color = color;
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI*2);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
      };
}

class Car{
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.destroyedTargets = 0;
        this.color = color
        this.active = true;
    }
    draw = () => {
        c.beginPath();
        c.rect(this.x, this.y, 50,75);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();

        c.beginPath();
        c.arc(this.x - 5, this. y + 15, 15, 0, 2 * Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.stroke();
        c.closePath();

        c.beginPath();
        c.arc(this.x  - 5, this. y + this.width + 15, 15, 0, 2 * Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.stroke();
        c.closePath();

        c.beginPath();
        c.arc(this.x + this.width + 5, this. y + 15, 15, 0, 2 * Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.stroke();

        c.beginPath();
        c.arc(this.x + this.width + 5, this. y + this.width + 10, 15, 0, 2 * Math.PI);
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

var player = new Car(375,450,"red");
var lines = [];
var blocks = [];
var colors = ["red","white"];
var bullets =[];

function spawnBlock()
{
    blocks.push(new Bullet(Math.floor(Math.random() *  (cvs.width - 175 - 125) + 125) ,-200,50,"black"));
    console.log(blocks);
}

function spawnLines(){
    for(let i = 0 ; i < 17; i++){
        lines.push(new Line(0,i * 38, 20, 100,"red"));
        lines.push(new Line(cvs.width - 100,i * 38, 20, 100,"red"));
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
        e.y = e.y + dy;
        if(e.y > 600 + e.height)
        {
           e.y = -e.height;
        }
    })
    if(player.active)
    bullets.forEach(obj => {
        obj.draw();
        if(obj.active){
            blocks.forEach(target => {

                var a = obj.x - target.x;
                var b = obj.y - target.y;
                var c = Math.sqrt( a*a + b*b );



             
                if((c < 10 + target.size)){
                    target.active = false;
                    player.destroyedTargets = player.destroyedTargets + 1;
                    console.log("PKT: " + player.destroyedTargets);
                    obj.active = false;
                }

            })
            obj.y = obj.y - 5;
        }
    })
    bullets = bullets.filter(e => e.active)


    blocks.forEach(e => {
        if(e.active){

            var a = e.x - player.x + 30;
            var b = e.y - player.y + 30;
            var c = Math.sqrt( a*a + b*b );
         
            if((c < 45)){
                player.active = false;
            }


            e.draw();
            e.y = e.y + dy;
            if(e.y > 600 + e.height)
            {  
                e.active = false;
            }
        }
    })
    blocks = blocks.filter(e => e.active)

    if(player.active){
        player.draw();
    }
    else{
        c.font = '50px serif';
        c.beginPath();
        c.fillStyle = "black";
        c.fillText('Game over',400, 400);
    }

    
}

window.addEventListener('keydown',this.check,false);
setInterval(update,10)
setInterval(spawnBlock,100 * (15 - dy))
spawnLines();
   