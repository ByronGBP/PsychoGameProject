var timeRight;
var timeBottom;

function MockSquares() {
  var timeToHit;
  var squares = [_createSquareAtTrack(1), _createSquareAtTrack(2)];
  return {
    getTimeToHit: function() {
      _calculateTime();
    },
    getSquares: function() {
      return squares;
    }
  };
}

function _calculateTime() {
  _updateSquareUntilHit();
}

function _updateSquareUntilHit() {
  time1.startTimer();
  time2.startTimer();
  mockAnimate();
}


function _perfectHitRight(square) {
  var squareForHit = squaresForHit.getSquares()[1];
  return (Math.floor(squareForHit.getPosition().x) === Math.floor(square.getPosition().x)) ||
                    (squareForHit.getPosition().x > square.getPosition().x);
}

function _perfectHitBottom(square) {
  var squareForHit = squaresForHit.getSquares()[2];
  return (Math.floor(squareForHit.getPosition().y) === Math.floor(square.getPosition().y)) ||
                    (squareForHit.getPosition().y > square.getPosition().y);
}

function mockAnimate() {
    _updateMockSquares();
    if(!time1.isEnded() && _perfectHitRight(mockForTime.getSquares()[0])) {
      time1.stopTimer();
      timeRight = time1.getTheSeconds();
    }
    if(!time2.isEnded() && _perfectHitBottom(mockForTime.getSquares()[1])) {
      time2.stopTimer();
      timeBottom = time2.getTheSeconds();
    }
    if(!time1.isEnded() || !time2.isEnded()) {
      requestAnimationFrame(mockAnimate);
    }
    else{
      console.log("right: " + timeRight + ", bottom: " + timeBottom);
      $(".select").show();
    }
}

function _updateMockSquares() {
  clearCanvas();
  var mocks = mockForTime.getSquares();
  mocks.map(function(square) {
    square._updateMock();
  });
}


var time1 = new MyTimer();
var time2 = new MyTimer();

function MyTimer() {
  var timeStart;
  var timeEnd;
  var end = false;

  return {
    startTimer: function() {
      timeStart = performance.now();
      end = false;
    },
    stopTimer: function() {
      if(timeStart) {
        timeEnd = performance.now();
        end = true;
      }
    },
    isEnded: function() {
      return end;
    },
    getTheSeconds: function() {
      if(timeStart && timeEnd){
        var time = _transformToSecond(timeEnd - timeStart);
        timeStart = null;
        timeEnd = null;
        clearCanvas();
        return time;
      }
    }
  };
}

function _transformToSecond(time) {
  return time / 1000;
}
