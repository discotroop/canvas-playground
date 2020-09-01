// get canvas and context
let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

// get colors div for color selection
let colors = document.querySelector(".colors");

// Get brush size elements
let shrinkBrush = document.getElementById("shrink-brush");
let growBrush = document.getElementById("grow-brush");
let brushSize = document.getElementById("brush-size");

// set default brush
let brush = {
  size: 5,
  color: "#FF0000"
};

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener("mousedown", e => {
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

// Use draw() to generate lines
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
  brush.color = e.target.id;
});

// Brush size selection
brushSize.value = brush.size;
function displayBrushSize() {
  brushSize.value = brush.size;
}
shrinkBrush.addEventListener("click", function() {
  if (brush.size > 1) {
    brush.size -= 1;
  }
  displayBrushSize();
});
growBrush.addEventListener("click", function() {
  if (brush.size < 200) {
    brush.size += 1;
  }
  displayBrushSize();
});
brushSize.addEventListener("change", function() {
  // Set max size and multiply value to handle string/number integration
  if (brushSize.value < 200) {
    brush.size = brushSize.value * 1;
  } else {
    brushSize.value = 200;
    brush.size = brushSize.value * 1;
  }
});

console.log(brushSize);
