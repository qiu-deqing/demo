var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  gradient = context.createLinearGradient(0, 0,
    canvas.width, 0);

context.lineJoin = 'round';
context.lineWidth = 100;

gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'white');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(0.75, 'red');
gradient.addColorStop(1, 'yellow');
context.fillStyle = gradient;

context.font = '24px Helvetica';
context.fillText('Click anywhere to erase', 175, 40);

context.strokeRect(75, 100, 200, 200);
context.fillRect(425, 100, 200, 200);

context.canvas.onmousedown = function (e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
