
function _startAudiosWithDelay() {
  audioMutedRight.muted = true;
  audioMutedBottom.muted = true;

  var right = _transformToMili(timeRight);
  var bottom = _transformToMili(timeBottom);
  var delay;


  if (right > bottom){
    audioMutedRight.play();

    delay = right - bottom;
    _startDelayBottom(delay);
    _startMusicWithDelay(right);
  }
  else if(bottom > right){
    audioMutedBottom.play();

    delay = right - bottom;
    _startDelayRight(delay);
    _startMusicWithDelay(bottom);
  }
  else{
    audioMutedBottom.play();
    audioMutedRight.play();
    _startMusicWithDelay(bottom || right);
  }

}

function _startDelayBottom(delay) {
  setTimeout(function(){
    audioMutedBottom.play();
  }, delay);
}

function _startDelayRight(delay) {
  setTimeout(function(){
    audioMutedRight.play();
  }, delay);
}

function _startMusicWithDelay(delay) {
  setTimeout(function(){
    audioListen.play();
  }, delay);
}

function _transformToMili(seg) {
  return seg  * 1000;

}
