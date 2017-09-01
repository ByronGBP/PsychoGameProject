
var matchedEmptyMoment = false;

function _checkEmpty() {
  if (!matchedEmptyMoment && _inTimeEmpty(EMPTY[0]) && audioListen.currentTime != 0){
    matchedEmptyMoment = true;
  }
  if (_finishedEmpty(EMPTY[0])){
    EMPTY.splice(0,1);
    matchedEmptyMoment = false;
  }
}

function _finishedEmpty(timing){
  tim = timing || new Timing();
  return tim.getEnd().toFixed(2) === audioListen.currentTime.toFixed(2);
}

function _inTimeEmpty(timing){
  tim = timing || new Timing();
  return tim.getStart().toFixed(2) === audioListen.currentTime.toFixed(2);
}

var emtpyCanvas;
var emptyContext;

function _createCanvasEmpty() {

  var newCanvas = document.createElement("canvas");
  newCanvas.setAttribute("width", currentDimensions.width);
  newCanvas.setAttribute("height", currentDimensions.height);
  newCanvas.setAttribute("class", "empty-canvas");

  document.getElementsByTagName("body")[0].append(newCanvas);
  return newCanvas;
}

function _drawBackgroundEmpty() {
  var width = emptyContext.canvas.width;
  var height = emptyContext.canvas.height;

  emptyContext.fillStyle = "rgba(0,0,0,0.1)";
  emptyContext.fillRect(0, 0, width, height);
}

function _clearBackgroundEmpty() {
  var width = emptyContext.canvas.width;
  var height = emptyContext.canvas.height;

  emptyContext.clearRect(0,0, width, height);
}

function drawEmpty() {
  if(matchedEmptyMoment){
    _drawBackgroundEmpty();
  }
  else {
    _clearBackgroundEmpty();
  }
}
