



var i = 0;
var i2 = 1;
var i3 = 0;
var flag = 1;
var flag2 = 0
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

    if(flag2){
        i2 = i2 + 1;
    }
    else{
        i2 = i2 - 1 ;
    }
    if(i2 == 255 || i2 == 0) {
        flag2 = !flag2
        
    }

    ctx.fillStyle = `rgb(0,${i2},${255 - i2})`;
    ctx.arc(250, 300, 50, 0, 2 * Math.PI);
    ctx.fill();
}

function changeThird() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();

    
    ctx.clearRect(0, 0, 200, 800);

   
    if(flag){
        i3 = i3 + 10;
    }
    else{
        i3 = i3 - 10 ;
    }
    if(i3 == 500 || i3 == 0) {
        flag = !flag
    }
    ctx.fillStyle = `rgb(0,${i2},${255 - i2})`;
    ctx.arc(100,  50 +  i3, 50, 0, 2 * Math.PI);
    ctx.fill();
    
}

setInterval(changeSecond, 10);
setInterval(changeFirst, 1000);
setInterval(changeThird, 10);