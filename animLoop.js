var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width = 400;
var height = canvas.height = 400;

var xOff = 0;
var yOff = 0;

var loop = true;
var requestAnimId = 0;
var targetFrameRate = 10;
var lastFrameTime = window.performance.now();

function draw() {
  var now = window.performance.now();
  var then = now - lastFrameTime;
  var interval = 1000.0 / targetFrameRate;
  var epsilon = 5;

  if (!loop || then >= interval - epsilon) {

    redraw();

    var frameRate = 1000.0 / (now - lastFrameTime);
    lastFrameTime = now;
  }
  if (loop) {
    requestAnimId = window.requestAnimationFrame(draw);
  }
}

function redraw() {
  if(xOff === width) {
    xOff = 0;
    yOff += 5;
  }
  context.fillRect(xOff,yOff,5,5);
  xOff += 5;
}

draw();
