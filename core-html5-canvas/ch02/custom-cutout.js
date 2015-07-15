var context = document.getElementById('canvas')
  .getContext('2d');


function drawGrid(ctx, color, stepx, stepy) {
  ctx.lineWidth = 0.5;
  ctx.fillStyle = color;

  for (var i = stepx; i < ctx.canvas.width; i += stepx) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, ctx.canvas.height);
    ctx.stroke();
  }

  for (var i = stepy; i < ctx.canvas.height; i += stepy) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(ctx.canvas.width, i);
    ctx.stroke();
  }
}

function draw() {
  context.clearRect(0, 0, context.canvas.width,
      context.canvas.height);
  drawGrid(context, 'lightgray', 10, 10);

  context.save();

  context.shadowColor = 'rgba(200, 200, 0, 0.5)';
  context.shadowOffsetX = 12;
  context.shadowOffsetY = 12;
  context.shadowBlur = 15;

  drawCutouts();
  strokeCutoutShapes();
  context.restore();
}


function drawCutouts() {
  context.beginPath();
  addOuterRectanglePath();

  addCirclePath();
  addRectanglePath();
  addTrianglePath();

  context.fill();
}

function strokeCutoutShapes() {
  context.save();

  context.strokeStyle = 'rgba(0, 0, 0, 0.7)';

  context.beginPath();
  addOuterRectanglePath();
  context.stroke();

  context.beginPath();
}
