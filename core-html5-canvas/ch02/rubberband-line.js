var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  eraseAllButton = document.getElementById('eraseAllButton'),
  strokeStyleSelect = document.getElementById('strokeStyleSelect'),
  guidewireCheckbox = document.getElementById('guidewireCheckbox'),
  drawingSurfaceImageData,
  mousedown = {},
  rubberbandRect = {},
  dragging = false,
  guidewires = guidewireCheckbox.checked;

function drawGrid(context, color, stepx, stepy) {
  context.strokeStyle = color;
  context.strokeWidth = 0.5;

  for (var i = stepx + 0.5; i < context.canvas.width; ++i) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, context.canvas.height);
    context.stroke();
  }

  for (var i = stepy + 0.5; i < context.canvas.height; ++i) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.canvas.width, i);
    context.stroke();
  }
}

function windowToCanvas(x, y) {
  var bbox = canvas.getBoundingClientRect();

  return {
    x: x - bbox.left * (canvas.width / bbox.width),
    y: y - bbox.top * (canvas.height / bbox.height)
  };
}

function saveDrawingSurface() {
  drawingSurfaceImageData = context.getImageData(0, 0,
    canvas.width, canvas.height);
}

function restoreDrawingSurface() {
  context.putImageData(drawingSurfaceImageData, 0, 0);
}
