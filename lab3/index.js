const cvs = document.getElementById("myCanvas");
const c = cvs.getContext('2d');

cvs.width = 800 
cvs.height = 600
var dy = 10;

class Player{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
    }

    draw = () => {
        console.log(objects[0].x+" "+ objects[0].y)
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
        c.fillStyle = "red";
        c.fill();
        c.stroke();
      };
}

var objects = [new Player(0, cvs.height -50 )];

function check(e) {

    console.log(e.keyCode)
    var code = e.keyCode;
    switch (code) {
        case 37: 
            if(objects[0].x - 1 >= 0)
                objects[0].x = objects[0].x - 5;
            break;
        case 39: 
            if(objects[0].x + 1 <= cvs.width - 50)
                objects[0].x = objects[0].x + 5;
            break;
        default:
            objects.push(new Bullet(objects[0].x + 25,objects[0].y))
            console.log(objects)
    }
    update();
}

function update(){

    objects.forEach(obj => {
        console.log(obj == Bullet)
        if(obj instanceof Bullet){
            obj.y = obj.y - dy;
        }
    })

    c.clearRect(0, 0, cvs.width, cvs.height);
    objects.forEach(obj => {
        obj.draw();
    })
}

window.addEventListener('keydown',this.check,false);
setInterval(update,100)