var context = document.getElementById('canvas')
  .getContext('2d');

function drawGrid(context, color, stepx, stepy) {
  context.lineWidth = 0.5;
  context.strokeStyle = color;

  for (var i = stepx; i < context.canvas.width; i += stepx) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
  }

  for (var i = stepy; i < context.canvas.height; i += stepy) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.canvas.width, i);
    context.stroke();
  }
}

function drawTwoArcs() {
  context.beginPath();
  context.arc(300, 190, 150, 0, Math.PI * 2, false);
  context.arc(300, 190, 100, 0, Math.PI * 2, true);

  context.fill();
  context.shadowColor = undefined;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.stroke();
}

function draw() {
  context.clearRect(0, 0, context.canvas.width,
      context.canvas.height);
  drawGrid(context, 'lightgray', 10, 10);

  context.save();

  context.shadowColor = 'rgba(0, 0, 0, 0.8)';
  context.shadowOffsetX = 12;
  context.shadowOffsetY = 12;
  context.shadowBlur = 15;

  drawTwoArcs();

  context.restore();
}


context.fillStyle = 'rgba(100, 140, 230, 0.5)';
context.strokeStyle = context.fillStyle;
draw();
