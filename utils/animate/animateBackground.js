
var matchedBackgruond = false;

function _checkFlashBackground() {
  if (!matchedBackgruond && _inTimeBackground(FLASH[0]) && audioListen.currentTime != 0){
    matchedBackgruond = true;

  }
  if (_finishedBackground(FLASH[0])){
    FLASH.splice(0,1);
    matchedBackgruond = false;
  }
}

function _finishedBackground(timing){
  tim = timing || new Timing();
  return tim.getEnd().toFixed(2) === audioListen.currentTime.toFixed(2);
}

function _inTimeBackground(timing){
  tim = timing || new Timing();
  return tim.getStart().toFixed(2) === audioListen.currentTime.toFixed(2);
}

var backgroundCanvas;
var backgroundContext;

function _createCanvasFlash() {

  var newCanvas = document.createElement("canvas");
  newCanvas.setAttribute("width", currentDimensions.width);
  newCanvas.setAttribute("height", currentDimensions.height);
  newCanvas.setAttribute("class", "f-canvas");

  document.getElementsByTagName("body")[0].append(newCanvas);
  return newCanvas;
}

function _drawBackgroundFlash() {
  var width = backgroundContext.canvas.width;
  var height = backgroundContext.canvas.height;

  backgroundContext.fillStyle = "rgba(255,255,255,0.5)";
  backgroundContext.fillRect(0, 0, width, height);
}

function _clearBackgroundFlash() {
  var width = backgroundContext.canvas.width;
  var height = backgroundContext.canvas.height;

  backgroundContext.clearRect(0,0, width, height);
}

function drawBackgroundFlash() {
  if (matchedBackgruond) {
    _drawBackgroundFlash();
  }else {
    _clearBackgroundFlash();
  }
}
