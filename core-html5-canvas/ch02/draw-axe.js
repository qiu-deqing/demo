var canvas = document.getElementById('canvas'),
  canvas = canvas.getContext('2d'),

  AXIS_MARGIN = 40,
  AXIS_ORIGIN = {
    x:  AXIS_MARGIN,
    y:  canvas.height - AXIS_MARGIN
  },

  AXIS_TOP = AXIS_MARGIN,
  AXIS_RIGHT = canvas.width - AXIS_MARGIN,

  HORIZONTAL_TICK_SPACING = 10,
  VERTICAL_TICK_SPACING = 10,

  AXIS_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x,
  AXIS_HEIGHT = AXIS_ORIGIN.Y - AXIS_TOP,

  NUM_VERTICAL_TICKS = AXIS_HEIGHT / VERTICAL_TICK_SPACING,
  NUM_HORIZONTAL_TICKS = AXIS_WIDTH / HORIZONTAL_TICK_SPACING,


  TICK_WIDTH = 10,
  TICKS_LINEWIDTH = 0.5,
  TICKS_COLOR = 'navy',

  AXIS_LINEWIDTH = 1.0,
  AXIS_COLOR = 'blue';


function drawGrid(context, color, stepx, stepy) {
  context.strokeStyle = color;
  context.strokeWidth = 0.5;

  for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, context.canvas.height);
    context.stroke();
  }

  for (var i = stepy; )
}
