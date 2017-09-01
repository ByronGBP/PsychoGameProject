
function _createSquareAtTrack(track, pos, col) {

  var position = pos || _getPositionForTrack(track);
  var size = {
    height: currentDimensions.height * WIDTH,
    width: currentDimensions.height * WIDTH
  };

  return _createSquare(position, size, col, track);
}

function _getPositionForTrack(track) {
  var halfWidth = currentDimensions.height * WIDTH / 2;
  switch(track) {
    case TRACK.up:
      return {
        x: currentDimensions.width / 2 - halfWidth,
        y: 0 - (halfWidth * 2)
      };
    case TRACK.right:
      return {
        x: currentDimensions.width,
        y: currentDimensions.height / 2 - halfWidth
      };
    case TRACK.bottom:
      return {
        x: currentDimensions.width / 2 - halfWidth,
        y: currentDimensions.height
      };
    case TRACK.left:
      return {
        x: 0 - (halfWidth * 2),
        y: currentDimensions.height / 2 - halfWidth
      };
    default:
      console.log("Invalid track");
  }
}

function _createSquare(pos, size, col, track) {
  return new Square(pos.x, pos.y, size.width, size.height, col , track);
}

function _getRandomNumber() {return Math.floor((Math.random() * MAX_TRACKS));}
