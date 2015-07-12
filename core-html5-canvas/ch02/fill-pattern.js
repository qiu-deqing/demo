var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  repeatRadio = document.getElementById('repeatRadio'),
  noRepeatRadio = document.getElementById('noRepeatRadio'),
  repeatXRadio = document.getElementById('repeatXRadio'),
  repeatYRadio = document.getElementById('repeatYRadio'),
  image = new Image();

function fillCanvasWithPattern(repeatString) {
  var pattern = context.createPattern(image, repeatString);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = pattern;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fill();
}

repeatRadio.onclick = function () {
  fillCanvasWithPattern('repeat');
};
repeatXRadio.onclick = function () {
  fillCanvasWithPattern('repeat-x');
};
repeatYRadio.onclick = function () {
  fillCanvasWithPattern('repeat-y');
};
noRepeatRadio.onclick = function () {
  fillCanvasWithPattern('no-repeat');
};


image.src = 'ball.png';
image.onload = function () {
  fillCanvasWithPattern('repeat');
};
