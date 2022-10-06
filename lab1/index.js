var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var color = ["green", "blue"];
ctx.beginPath();


var i = 0;
function change() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color[i];
    i = (i + 1) % color.length;

    ctx.arc(400, 300, 100, 0, 2 * Math.PI);
    ctx.fill();
}

setInterval(change, 1000);