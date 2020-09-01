let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

let brush = {
  size: 20,
  color: "#FF0000"
};

console.log(canvas);

context.fillStyle = "#FF0000";
context.fillRect(0, 0, 150, 75);

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener("mousedown", e => {
  console.log(e);
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener("mousemove", e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
    drawLarge(e);
  }
});

canvas.addEventListener("mouseup", e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

// use draw line for 5px and under
function drawLine(context, x1, y1, x2, y2) {
  //   context.beginPath();
  //   context.strokeStyle = "black";
  //   context.lineWidth = 20;
  //   context.moveTo(x1, y1);
  //   context.lineTo(x2, y2);
  //   context.stroke();
  //   context.closePath();
}

// use draw for large line
function drawLarge(e) {
  var rect = canvas.getBoundingClientRect();
  var posx = e.clientX - rect.left;
  var posy = e.clientY - rect.top;

  context.fillStyle = "#000000";
  context.beginPath();
  context.arc(posx, posy, 25, 0, 2 * Math.PI);
  context.fill();
}
