var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var i = 1;
function change() {

    ctx.beginPath();

    
    var grad = ctx.createLinearGradient(0,0,i,0);


    grad.addColorStop(0,"blue");
    grad.addColorStop(1,"red");

    ctx.fillStyle = grad;

    ctx.arc(400, 300, 100, 0, 2 * Math.PI);
    ctx.arc(100, 300, 100, 0, 2 * Math.PI);
    

    ctx.fill();

}

setInterval(change, 100);