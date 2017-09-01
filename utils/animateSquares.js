function _checkAllSquareForDraw(){


  _checkFlashBackground();
  _checkFirstTrack();
  _checkSecondTrack();
  _checkThirdTrack();
  _checkFourthTrack();


  _checkEmpty();
  _checkRandomEye();
}

var matchedFirst = false;
var matchedSecond = false;
var matchedThird = false;
var matchedFourth = false;

function _checkFirstTrack(){
  if (!matchedFirst && _inTimeFirstAndThird(recordsRedeables[0][0]) && audioMutedBottom.currentTime != 0){
    _pushSquare(0);
    matchedFirst = true;
  }
  if (_finishedFirstAndThird(recordsRedeables[0][0])){
    _removeFromTrack(0);
    matchedFirst = false;
  }
}

function _checkSecondTrack(){
  if (!matchedSecond && _inTimeSecondAndFourth(recordsRedeables[1][0]) && audioMutedRight.currentTime != 0){
    _pushSquare(1);
    matchedSecond = true;

  }
  if (_finishedSecondAndForth(recordsRedeables[1][0])){
    _removeFromTrack(1);
    matchedSecond = false;
  }
}

function _checkThirdTrack(){
  if (!matchedThird  && _inTimeFirstAndThird(recordsRedeables[2][0]) && audioMutedBottom.currentTime !== 0){
    _pushSquare(2);
    matchedThird = true;
  }
  if (_finishedFirstAndThird(recordsRedeables[2][0])){
    _removeFromTrack(2);
    matchedThird = false;
  }
}

function _checkFourthTrack(){
  if (!matchedFourth && _inTimeSecondAndFourth(recordsRedeables[3][0]) && audioMutedRight.currentTime !== 0){
    _pushSquare(3);
    matchedFourth = true;
  }
  if (_finishedSecondAndForth(recordsRedeables[3][0])){
    _removeFromTrack(3);
    matchedFourth = false;
  }
}

function _removeFromTrack(track){
  recordsRedeables[track].splice(0,1);
}

function _finishedFirstAndThird(timing){
  tim = timing || new Timing();
  return tim.getEnd().toFixed(2) === audioMutedBottom.currentTime.toFixed(2);
}

function _finishedSecondAndForth(timing){
  tim = timing || new Timing();
  return tim.getEnd().toFixed(2) === audioMutedRight.currentTime.toFixed(2);
}

function _inTimeFirstAndThird(timing){
  tim = timing || new Timing();
  return tim.getStart().toFixed(2) === audioMutedBottom.currentTime.toFixed(2);
}

function _inTimeSecondAndFourth(timing) {
  tim = timing || new Timing();
  return tim.getStart().toFixed(2) === audioMutedRight.currentTime.toFixed(2);
}

function _pushSquare(track) {
  squaresAnimated.pushAtTrack(track);
}
