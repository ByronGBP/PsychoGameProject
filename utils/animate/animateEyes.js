

var matchedEyeRandom = false;

function _checkRandomEye() {
  if (!matchedEyeRandom && _inTimeEyeRandom(TIMEEYE[0]) && audioListen.currentTime != 0){
    matchedEyeRandom = true;
  }
  if (_finishedEyeRandom(TIMEEYE[0])){
    TIMEEYE.splice(0,1);
    matchedEyeRandom = false;
  }
}

function _finishedEyeRandom(timing){
  tim = timing || new Timing();
  return tim.getEnd().toFixed(2) === audioListen.currentTime.toFixed(2);
}

function _inTimeEyeRandom(timing){
  tim = timing || new Timing();
  return tim.getStart().toFixed(2) === audioListen.currentTime.toFixed(2);
}
