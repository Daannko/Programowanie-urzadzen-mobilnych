
var c = document.getElementById("myCanvas");
c.style.border = "1px solid black";
var ctx = c.getContext("2d");
var timer = 0;
var x =30 ;
var y = 70;

setInterval(drawS,10);
setInterval(drawB,10)

function drawS(){

    ctx.beginPath();

    ctx.clearRect(0, 0, 800,600);

    if(timer >= 0){
     ctx.rect(0,100,100,c.height - 100);
    }
    if(timer >= 100){
        ctx.rect(100,200,100,c.height - 200);
    }
    if(timer >= 200){
        ctx.rect(200,300,100,c.height - 300);
    }
    if(timer >= 300){
        ctx.rect(300,400,100,c.height - 400);
    }
    if(timer >= 400){
        ctx.rect(400,500,100,c.height - 500);
    }
    
    ctx.strokeStyle = "black";
    ctx.stroke();
    timer += 1;
}

function drawB(){

    if(timer < 500){
        return;
    }

    ctx.beginPath();
       
    var valuex = 5;
    var valuey = 20;
    var x2 = Math.floor((x - 20)/100)
    var maxy =  x2 * 100 + 70
    console.log(" x= " + x)
    console.log(" x2= " +x2)
    console.log(" maxy= "  + maxy)
    if( timer > 550){
        if(x < 770)
        x =  x + valuex;

        if(y < maxy && y < 570)
        y =  y + valuey ;
    }

    ctx.arc(x, y, 30, 0, Math.PI*2);
    ctx.fill();
    console.log(timer);

}