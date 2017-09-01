
function initSetup() {
  _initCircle();
  _initSquaresForHits();
  _initSquares();
  _initShadow();
  _getDelayTime();
  setupKeyboard();
  _setupTextCanvas();
  _setupEmptyCanvas();
  _setupFlashCanvas();

  FLASH = _returnObject(FLASH);
  EMPTY = _returnObject(EMPTY);
  TIMEEYE = _returnObject(TIMEEYE);

}

function _getDelayTime() {
  mockForTime = new MockSquares();
  mockForTime.getTimeToHit();
}

function _initCircle() {
  blackCircle = new BlackCircle();
  blackCircle.draw();
}

function _initSquaresForHits() {
  squaresForHit = new SquaresForHit();
  squaresForHit.draw();
}

function _initShadow() {
  shadow = new ShadowIncreise();
}

function _initSquares() {
  squaresAnimated = new Squares();
}

function _setupTextCanvas() {
  labelCanvas = _createCanvasText();
  labelCtx = labelCanvas.getContext("2d");
}

function _setupFlashCanvas() {
  backgroundCanvas = _createCanvasFlash();
  backgroundContext = backgroundCanvas.getContext("2d");
}

function _setupEmptyCanvas() {
  emtpyCanvas = _createCanvasEmpty();
  emptyContext = emtpyCanvas.getContext("2d");
}
