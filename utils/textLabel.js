
var labelCanvas;
var labelCtx;

function _createCanvasText() {

  var newCanvas = document.createElement("canvas");
  newCanvas.setAttribute("width", currentDimensions.width * 0.75);
  newCanvas.setAttribute("height", currentDimensions.height * 0.35);
  newCanvas.setAttribute("class", "tx-canvas");

  document.getElementsByTagName("body")[0].append(newCanvas);

  return newCanvas;
}

function _drawCanvasText(text) {
  var width = labelCtx.canvas.width;
  var height = labelCtx.canvas.height;

  for(var i = 0; i < 5; i++){
    labelCtx.font = "30px Arial";
    labelCtx.strokeStyle = "white";
    labelCtx.shadowBlur = 30;
    labelCtx.shadowColor = "white";
    labelCtx.strokeText(text, width/2 + width * 0.02, height/2);
  }
}

function drawText() {
  if (miss < 11){
    _drawCanvasText("Awesome! Just " + miss + " miss.");
  }
  else {
    _drawCanvasText("You sucks!!!! "+ miss + " miss.");
  }
}
