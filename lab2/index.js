
var c = document.getElementById("myCanvas");
c.style.border = "1px solid black";
var ctx = c.getContext("2d");
var timer = 0;


setInterval(drawS, 1000);

function drawS(){

    ctx.beginPath();

    if(timer >= 0){
     ctx.rect(0,100,100,c.height - 100);
    }
    if(timer >= 1){
        ctx.rect(100,200,100,c.height - 200);
    }
    if(timer >= 2){
        ctx.rect(200,300,100,c.height - 300);
    }
    if(timer >= 3){
        ctx.rect(300,400,100,c.height - 400);
    }
    if(timer >= 4){
        ctx.rect(400,500,100,c.height - 500);
    }

    ctx.strokeStyle = "black";
    ctx.stroke();
    timer += 1;
    console.log(timer);
}

function drawB(){

    ctx.beginPath();
    if(time >= 5){
        ctx.rect(100,200,100,c.height - 200);
    }

}