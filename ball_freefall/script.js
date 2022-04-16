const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let g = 9.8;

let u = 10;
let v = 0;

let dx = 2;
let dy = -2;
let dt = 0.05;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	v += g*dt;
	dx = u*dt;
	dy = v*dt;
	x += dx;
	y += dy;
	drawBall();
}

setInterval(draw, 10);

const button = document.getElementById("button");

function reverse() {
	v = -v;
}


button.onclick = reverse;