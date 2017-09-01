

var theta;
var spacing;
var size;
var speed;
var index;
var total;

var otherCanvas;
var otherContex;

// var r = 0;
// var g = 0;
// var b = 105;
// function _getColor(){
//   r += 1;
//   g += 1;
//   b += 1;
//
//   if (r > 100){
//     r = 0;
//   }
//
//   if (g > 100){
//     g = 0;
//   }
//
//   if (b > 255){
//     b = 105;
//   }
//
//   return "rgb("+r+","+g+","+b+")";
// }


var ColorsGradients = {
  start: "black",
  end: "rgba(0,0,102, 1)"
};

var timerBackground;
function createBackground(){

  otherCanvas = _createCanvas();
  otherContex = otherCanvas.getContext('2d');

  var side = otherContex.canvas.width;
  grd=otherContex.createRadialGradient(0, 0, currentDimensions.height*0.4,
    0,0,currentDimensions.height*0.8);
  grd.addColorStop(0,ColorsGradients.start);
  grd.addColorStop(1,ColorsGradients.end);
  otherContex.translate((currentDimensions.width / 2) * 1.5, (currentDimensions.width / 2)* 1.5);
  otherContex.fillStyle=grd;

  var back = currentDimensions.width * 1.5 * 0.5;
  var heightBack = currentDimensions.width * 1.5 * 0.5;
  otherContex.fillRect(-back ,-heightBack ,currentDimensions.width * 2,currentDimensions.width * 2);

  _setupVariablesForPattern();
  timerBackground = setInterval(function(){ _animatePattern();}, 45);
}

var colorN = 0;

function _getColor(){
  var color = colorShadow[colorN];
  colorN++;
  if (colorN > maxColor - 3){
    colorN = 0;
  }
  return color;
}

function _animatePattern() {
otherCanvas.style.transform = "rotate(" + -speed / 2 + "deg)";

for (var j = 0; index < total && j < speed; ++j) {
  var radius = spacing * Math.sqrt(++index),
      angle = index * theta,
      x = radius * Math.cos(angle),
      y = radius * Math.sin(angle);

  otherContex.beginPath();
  otherContex.arc(x, y, size, 0, 2 * Math.PI);
  otherContex.stroke();
  var color = _getColor();
  otherContex.fillStyle = color;
  otherContex.fill();
  didSom = true;

}

speed += 0.1;

}

function _setupVariablesForPattern() {
  theta = 111 * Math.PI/180;
  spacing = 6;
  size = spacing - 3;
  speed = 1;
  index = 0;

  var radius = _getRadiusForPattern();
  total = (radius * radius) / (spacing * spacing);
}

function _createCanvas() {
  var radius = _getRadiusForPattern();

  var newCanvas = document.createElement("canvas");
  newCanvas.setAttribute("width", currentDimensions.width * 1.5);
  newCanvas.setAttribute("height", currentDimensions.width * 1.5);
  newCanvas.setAttribute("class", "bg-canvas");

  var relation = (currentDimensions.width * 1.5 - currentDimensions.height) / 2;

  newCanvas.style.left = "-25%";
  newCanvas.style.top = "-"+relation+"px";
  document.getElementsByTagName("body")[0].append(newCanvas);

  return newCanvas;
}

function _getRadiusForPattern() {
  return Math.sqrt(currentDimensions.width / 2 * currentDimensions.width / 2 + currentDimensions.height / 2 * currentDimensions.height / 2) + 5;
}
