var audioListen = new Audio("media/music.mp3");
var audioMutedRight = new Audio("media/music.mp3");
var audioMutedBottom = new Audio("media/music.mp3");

var canvas = document.getElementsByClassName('canvas')[0];
var ctx = canvas.getContext('2d');
var currentDimensions;

var squaresForHit;
var blackCircle;
var squaresAnimated;
var shadow;
var miss = 0;

window.onload = function() {
  $(".select").hide();
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  currentDimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  initSetup();
};
var intervalMusic;
function animate() {
  if(!audioListen.ended) {
    clearCanvas();
    drawBackgroundFlash();
    drawEmpty();
    squaresAnimated.updateSquares();
    squaresForHit.draw();
    blackCircle.draw();
    requestAnimationFrame(animate);

  }
  else {
    drawText();
  }
}

function playMusic(){
  _startAudiosWithDelay();
  createBackground();
  intervalMusic = setInterval(function(){ _checkAllSquareForDraw();}, 1);
  animate();
}
