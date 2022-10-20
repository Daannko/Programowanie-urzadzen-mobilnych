
var c = document.getElementById("myCanvas");
c.style.border = "1px solid black";
var ctx = c.getContext("2d");
var timer = 0;
var timerB = 0


setInterval(drawS, 100);
setInterval(drawB,100)

function drawS(){

    ctx.beginPath();

    ctx.clearRect(0, 0, 600,800);

    if(timer >= 0){
     ctx.rect(0,100,100,c.height - 100);
    }
    if(timer >= 10){
        ctx.rect(100,200,100,c.height - 200);
    }
    if(timer >= 20){
        ctx.rect(200,300,100,c.height - 300);
    }
    if(timer >= 30){
        ctx.rect(300,400,100,c.height - 400);
    }
    if(timer >= 40){
        ctx.rect(400,500,100,c.height - 500);
    }

    ctx.strokeStyle = "black";
    ctx.stroke();
    timer += 1;
 
}

function drawB(){

    ctx.beginPath();
    timerB = timerB + 1
    if(timerB>= 1){

        var x = 50 + timerB * 1;
        var y = 50 + timerB * 1;

        ctx.arc(x, y, 50, 0, Math.PI*2);
        ctx.fill();
        console.log(timer);
  
    }

}