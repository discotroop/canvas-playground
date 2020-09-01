// get canvas and context
let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

let colors = document.querySelector(".colors");

let brush = {
  size: 5,
  color: "#FF0000"
};

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
    draw(e);
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener("mouseup", e => {
  if (isDrawing === true) {
    draw(e);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

// use draw for large line
function draw(e) {
  var rect = canvas.getBoundingClientRect();
  var posx = e.clientX - rect.left;
  var posy = e.clientY - rect.top;

  context.fillStyle = brush.color;
  context.beginPath();
  context.arc(posx, posy, brush.size, 0, 2 * Math.PI);
  context.fill();
}

// Color Selection
colors.addEventListener("click", function(e) {
  console.log(e.target.id);
  brush.color = e.target.id;
});
