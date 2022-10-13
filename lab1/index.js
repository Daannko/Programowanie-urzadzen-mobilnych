



var i = 0;
var i2 = 1;
function changeFirst() {


    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();

    i = !i;

    ctx.fillStyle = `rgb(0,${i * 255},${(1 - i) * 255})`;
    ctx.arc(400, 300, 50, 0, 2 * Math.PI);
    ctx.fill();

}

function changeSecond() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();

    i2 = (i2 + 1) % 255

    ctx.fillStyle = `rgb(0,${i2},${255 - i2})`;
    ctx.arc(200, 300, 50, 0, 2 * Math.PI);
    ctx.fill();



}

setInterval(changeSecond, 10);
setInterval(changeFirst, 1000);