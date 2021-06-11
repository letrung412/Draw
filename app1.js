let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")

function draw() {
let Ax = document.getElementById('Ax').value;
let Ay = document.getElementById('Ay').value;
let Bx = document.getElementById('Bx').value;
let By = document.getElementById('By').value;
let Cx = document.getElementById('Cx').value;
let Cy = document.getElementById('Cy').value;
let ABlength = Math.pow((Ax - Bx),2) + Math.pow((Ay- By),2);
let BClength = Math.pow((Bx - Cx),2) + Math.pow((By - Cy), 2)
let AClength = Math.pow((Ax - Bx), 2) + Math.pow((Ay - Cy), 2)
    if (ABlength + AClength < BClength) {
        alert (`khong du dieu kien`);
        del();
    }
    else if (ABlength + AClength == BClength) {
        alert (`khong du dieu kien`);
        del();
    }
    else if ( ABlength + AClength > BClength) {
        ctx.beginPath();
        ctx.moveTo(Ax, Ay);
        ctx.lineTo(Bx, By);
        ctx.lineTo(Cx, Cy);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fillStyle = ' red'
        ctx.fill();
        
    }
}
function del() {
    let inputValue = document.getElementsByClassName("input").value;
    inputValue = 0;
}
function confirm() {
    draw();
    del();

}